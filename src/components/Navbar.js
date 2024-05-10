import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo resized again.png";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#FFD700" : "#fff",
    };
  };
  return (
    <nav className="navContainer">
      
     <img className="logoImg" src={logo} alt="logo..." />
     
      <div className="navLink">
        <NavLink to="/home" style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/git-repo" style={navLinkStyles}>
          GitRepo
        </NavLink>
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
