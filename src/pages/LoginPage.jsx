import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Container,
  Image,
  Button,
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import BASE_URL from "../utilities/apiUrl-Totals";
import axios from "axios";
import { toast } from "react-toastify";
import actionPic from "../assets/login.png";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState("none");
  const [cookies, removeCookie] = useState([]);
  const [username, SetUsername] = useState("");

  //send login data
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/login`, loginData, { withCredentials: true })
      .then((resp) => {
        if (resp.data.msg === "Log in successful") {
          toast.success(resp.data.msg);
          localStorage.setItem("logged", resp.data.user);
          localStorage.setItem("id", resp.data.staffId);
          navigate("/dashboard");
        } else {
          toast.error(resp.data.msg);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        return error;
      });
  };

  return (
    <Flex height="100vh" alignItems="center" p="5">
      <Container width="100%" p="10" borderRadius="lg" bg="white">
        <Form onSubmit={handleLogin}>
          <h1 className="title">Log in to your account</h1>
          <FormControl>
            <FormLabel>Staff Id</FormLabel>
            <Input
              required
              type="text"
              name="staffId"
              onChange={(e) =>
                setLoginData({ ...loginData, staffId: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              required
              type="password"
              name="password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </FormControl>

          <Button
            type="submit"
            mt={2}
            bg="navy"
            color="white"
            border="2px"
            borderColor="navy"
            _hover={{
              background: "white",
              color: "navy",
            }}
          >
            Log In
          </Button>
        </Form>
      </Container>
      <Box hideBelow="lg">
        <Image boxSize="lg" src={actionPic}></Image>
      </Box>
    </Flex>
  );
};

export default LoginPage;
