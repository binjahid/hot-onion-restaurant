import React from "react";
import logo from "../../images/logo/logo.png";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img src={logo} alt="" />
      </div>
      <div className="nav-container">
        <FaShoppingCart className="header-icon" />
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
// FaShoppingCart
