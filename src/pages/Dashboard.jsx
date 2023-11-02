import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import BASE_URL from "../utilities/apiUrl-Totals";
import { useCookies } from "react-cookie";

import Logo from "../components/Logo";
import { Button, Center } from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, SetUsername] = useState("");

  // //if user is logged to grant access to dashboard
  // useEffect(() => {
  //   let isLoggedIn = localStorage.getItem("logged");
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        `${BASE_URL}`,
        {},
        { withCredentials: true }
      );
      const { status, teller } = data;
      SetUsername(teller);
      return status
        ? toast.success(`Hello, ${teller}`)
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

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
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="top">
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
                  {username}
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
        <Menu />
      </div>
      <div className="mid" bg="pink">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
