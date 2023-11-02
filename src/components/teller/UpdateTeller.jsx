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
import axios from "axios";
import BASE_URL from "../../utilities/apiUrl-Totals";
import { toast } from "react-toastify";

const UpdateTeller = () => {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({});

  const handleSubmit = () => {
    console.log(updateData);
    try {
      axios
        .patch(`${BASE_URL}/teller/update`, updateData)
        .then((resp) => {
          if (resp.data.msg === "Password Updated") {
            toast.success(resp.data.msg);
            navigate("/dashboard/admin");
          } else {
            toast.error(resp.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
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
        <Form onSubmit={handleSubmit}>
          <h1 className="title">Recover password</h1>
          <FormControl>
            <FormLabel>Staff Id</FormLabel>
            <Input
              type="text"
              name="staffId"
              required
              onChange={(e) =>
                setUpdateData({ ...updateData, staffId: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              required
              onChange={(e) =>
                setUpdateData({ ...updateData, password: e.target.value })
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
            Submit
          </Button>
        </Form>
      </Container>
    </Flex>
  );
};

export default UpdateTeller;
