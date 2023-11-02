import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../utilities/apiUrl-Totals";

const Profile = () => {
  const [changedPassword, setChangedPassword] = useState({});
  const navigate = useNavigate();

  //change password
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log(changedPassword);
  //   axios
  //     .patch(`${BASE_URL}/teller/change`, changedPassword)
  //     .then((resp) => {
  //       if (resp.data.msg === "Staff ID does not exist") {
  //         toast.error(resp.data.msg);
  //       } else if (resp.data.msg === "Invalid credentials") {
  //         toast.error(resp.data.msg);
  //       } else {
  //         console.log(resp);
  //         toast.success(resp.data.msg);
  //         navigate("/dashboard");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       toast.error(error.message);
  //       return error;
  //     });
  // };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(changedPassword);
    axios
      .patch(`${BASE_URL}/teller/change`, changedPassword)
      .then((resp) => {
        if (resp.data.msg === "Password Updated") {
          toast.success(resp.data.msg);
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
    <Center width="350px" height="400px" borderRadius="lg" bg="white">
      <Center h="250px" w="100%">
        <div>
          <Form onSubmit={handleChange}>
            <h1 className="cen title">Update Password</h1>
            <FormControl>
              <FormLabel>Staff Id</FormLabel>
              <Input
                required
                type="text"
                name="staffId"
                onChange={(e) =>
                  setChangedPassword({
                    ...changedPassword,
                    staffId: e.target.value,
                  })
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
                  setChangedPassword({
                    ...changedPassword,
                    password: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                name="newPassword"
                onChange={(e) =>
                  setChangedPassword({
                    ...changedPassword,
                    newPassword: e.target.value,
                  })
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
        </div>
      </Center>
    </Center>
  );
};

export default Profile;
