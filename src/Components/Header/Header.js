import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav className=" container nav-container">
        <div className="nav">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-item">
          <Link to="/">Shop</Link>
          <Link to="/orders">Order Review</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
