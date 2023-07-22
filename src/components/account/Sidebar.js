import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Browse</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Favorites</a>
        </li>
      </ul>
      <div className="logout">
        <a href="#">Log Out</a>
      </div>
    </div>
  );
}

export default Sidebar;
