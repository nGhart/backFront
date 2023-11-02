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
import BASE_URL from "../../utilities/apiUrl-Totals";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteTeller = () => {
  const [deletedStaff, setDeletedStaff] = useState("");
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log(deletedStaff);
    try {
      axios
        .post(`${BASE_URL}/teller/delete`, deletedStaff)
        .then((resp) => {
          if (resp.data.msg === "Deleted successfully") {
            toast.success(resp.data.msg);
            navigate("/dashboard/admin");
          } else {
            toast.error(resp.data.msg);
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <Flex height="100%" alignItems="center">
      <Container
        width="100%"
        p="10"
        className="actionContainer"
        borderRadius="lg"
        bg="white"
      >
        <Form onSubmit={handleDelete}>
          <h1 className="title">Delete Teller</h1>
          <FormControl>
            <FormLabel>Staff ID</FormLabel>
            <Input
              className="filterInput"
              required
              type="text"
              name="staffId"
              onChange={(e) => setDeletedStaff({ staffId: e.target.value })}
            />
          </FormControl>

          <div>
            <Button
              bg="navy"
              type="submit"
              color="white"
              mt="2"
              _hover={{ backgroundColor: "tomato" }}
            >
              Delete User
            </Button>
          </div>
        </Form>
      </Container>
    </Flex>
  );
};

export default DeleteTeller;
