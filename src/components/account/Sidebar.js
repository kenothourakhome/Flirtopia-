// import React from "react";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <a href="#">Account</a>
//         </li>
//         <li>
//           <a href="#">Browse</a>
//         </li>
//         <li>
//           <a href="#">Messages</a>
//         </li>
//         <li>
//           <a href="#">Favorites</a>
//         </li>
//       </ul>
//       <div className="logout">
//         <a href="#">Log Out</a>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

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

