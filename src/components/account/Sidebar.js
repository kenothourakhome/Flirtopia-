import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home/myaccount">Account</Link>
        </li>
        <li>
          <Link to="/home/browse">Browse</Link>
        </li>
        <li>
          <Link to="/home/messages">Messages</Link>
        </li>
        <li>
          <Link to="/home/favourites">Favorites</Link>
        </li>
      </ul>
      <div className="logout">
        <Link to="#">Log Out</Link>
      </div>
    </div>
  );
}

export default Sidebar;


