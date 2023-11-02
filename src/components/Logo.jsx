import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="logoSection">
      <img src={logo} alt="Logo" width={25} />
      <h1>tellerAPP</h1>
    </div>
  );
};

export default Logo;
