import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink activeStyle={{ color: "red" }} exact to="/">
        Home
      </NavLink>

      <NavLink activeStyle={{ color: "red" }} exact to="/all-games">
        All Games
      </NavLink>
    </nav>
  );
}

export default Navbar;
