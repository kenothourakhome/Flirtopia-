import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavLink>
      <Link to="/about">About</Link>
      <Link to="/features">Features</Link>
      <Link to="/safety">Safety</Link>
      <Link to="/compatibility">Compatibility</Link>
    </NavLink>
  );
}

export default Navbar;
