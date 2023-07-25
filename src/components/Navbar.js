import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Landing.css"

function Navbar() {
  return (
    <NavLink className="navlinks">
      <Link to="/about" className="links">
        About
      </Link>
      <Link to="/features" className="links">
        Features
      </Link>
      <Link to="/safety" className="links">
        Safety
      </Link>
      <Link to="/compatibility" className="links">
        Compatibility
      </Link>
    </NavLink>
  );
}

export default Navbar;
