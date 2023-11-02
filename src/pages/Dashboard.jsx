import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Menu from "../components/Menu";
import BASE_URL from "../utilities/apiUrl-Totals";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useState([]);
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
        navigate("/");
      }
      // await axios.post(`${BASE_URL}`, {}, { withCredentials: true });
      // const
    };
    verifyCookie;
  }, []);

  return (
    <div className="dashboard">
      <div className="top">
        <Navigation />
        <Menu />
      </div>
      <div className="mid" bg="pink">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
