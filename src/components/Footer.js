// import React from 'react'
// // import "./Landing.css";

// function Footer() {
//   return (
//     <footer>
//       <p>© 2023 flirtopia.com</p>
//       <ul>
//         <li>
//           <a href="#">Affiliate</a>
//         </li>
//         <li>
//           <a href="#">Terms</a>
//         </li>
//         <li>
//           <a href="#">Privacy and Cookies</a>
//         </li>
//         <li>
//           <a href="#">Contact Us</a>
//         </li>
//         <li>
//           <a href="#">Help</a>
//         </li>
//       </ul>
//     </footer>
//   );
// }

// export default Footer


import React from "react";
import "./Landing.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row-1">
        <p>© 2023 flirtopia.com</p>
      </div>
      <div className="footer-row-2">
        <ul>
          <li>
            <a href="#">Affiliate</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy and Cookies</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
