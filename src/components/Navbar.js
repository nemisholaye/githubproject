import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#945a2f" : "#fff",
    };
  };
  return (
    <nav className="navContainer">
      <div className="name">Onyinye Chukwuma</div>
      <div className="navLink">
        <NavLink to={"/"} style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to={"/about"} style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to={"/resume"} style={navLinkStyles}>
          Resume
        </NavLink>
        <NavLink to={"/contact"} style={navLinkStyles}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
