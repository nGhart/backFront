import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Button, Center } from "@chakra-ui/react";

const Navigation = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("none");

  useEffect(() => {
    const isAdmin = () => {
      let userStatus = localStorage.getItem("logged");
      if (userStatus === "admin") {
        setUserRole("block");
      } else {
        setUserRole("none");
      }
    };
    isAdmin();
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navigation">
      <Link to="/dashboard">
        <Logo />
      </Link>
      <div>
        <Center gap="5px">
          <Link to="admin">
            <Button
              display={userRole}
              bg="white"
              border="2px"
              borderColor="navy"
              color="navy"
              _hover={{
                backgroundColor: "navy",
                color: "white",
              }}
            >
              Admin
            </Button>
          </Link>
          <Link to="profile">
            <Button
              bg="white"
              border="2px"
              borderColor="navy"
              color="navy"
              _hover={{
                backgroundColor: "navy",
                color: "white",
              }}
            >
              Profile
            </Button>
          </Link>
          <Button
            onClick={logout}
            bg="navy"
            color="white"
            border="2px"
            borderColor="navy"
            _hover={{
              background: "tomato",
              borderColor: "tomato",
              color: "White",
            }}
          >
            Log Out
          </Button>
        </Center>
      </div>
    </div>
  );
};

export default Navigation;
