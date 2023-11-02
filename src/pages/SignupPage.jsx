import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Container,
  Button,
} from "@chakra-ui/react";
import BASE_URL from "../utilities/apiUrl-Totals";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({});
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/teller/signup`, signupData, { withCredentials: true })
      .then((resp) => {
        if (resp.data.msg === "New user added") {
          toast.success(resp.data.msg);
          navigate("/dashboard/admin");
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
    <Flex className="actionSection flex" height="100%" alignItems="center">
      <Container
        width="100%"
        p="10"
        className="actionContainer"
        borderRadius="lg"
        bg="white"
      >
        <Form onSubmit={handleSignup}>
          <h1 className="title">Create New Teller</h1>

          <FormControl className="mb-3">
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
            />
            <br />
          </FormControl>

          <FormControl className="mb-3">
            <FormLabel htmlFor="branch">Branch</FormLabel>
            <Input
              type="text"
              id="branch"
              name="branch"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, branch: e.target.value })
              }
            />
          </FormControl>

          <FormControl className="mb-3">
            <FormLabel htmlFor="staffId">Staff ID</FormLabel>
            <Input
              type="text"
              id="staffId"
              name="staffId"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, staffId: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="mb-3">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
          </FormControl>
          <Button
            type="submit"
            className="userButtons"
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
            Submit
          </Button>
        </Form>
      </Container>
    </Flex>
  );
};

export default SignupPage;
