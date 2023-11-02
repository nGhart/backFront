import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Menu from "../components/Menu";

const Dashboard = () => {
  const navigate = useNavigate();

  //if user is logged to grant access to dashboard
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("logged");
    if (!isLoggedIn) {
      navigate("/");
    }
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
