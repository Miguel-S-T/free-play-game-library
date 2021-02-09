import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        textAlign: "center",
        margin: "0 0 0",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <NavLink activeStyle={{ color: "red" }} exact to="/">
        Free Games Library
      </NavLink>
    </nav>
  );
}

export default Navbar;
