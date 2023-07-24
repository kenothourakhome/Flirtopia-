// import React from 'react'
// import Navbar from './Navbar'
// import Signup from './Signup'
// import Signin from './Signin'
// import "./Landing.css"
// // import Footer from "./Footer";

// function Landing() {
//   return (
//     <div className='landing'>
//         <Navbar />
//         <div className='landingspace'>
//             <div>
//             <Signup/>
//             </div>
//             <div>
//                 {/* #Should display here */}
//                 <Signin />
//             </div>
//         </div>
//         {/* <Footer /> */}
//     </div>
//   )
// }

// export default Landing

import React, { useState } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Signin from "./Signin";
import "./Landing.css";
// import Footer from "./Footer";

function Landing() {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleShowSignUp = () => {
    setShowSignUp(true);
  };

  const handleShowSignIn = () => {
    setShowSignUp(false);
  };

  return (
    <div className="landing">
      <Navbar />
      <div className="landingspace">
        {/* Add an outer container with a fixed height and scrolling */}
        <div className="signup-container">
          {showSignUp ? <Signup  /> : <Signin   />}
        </div>
        <div>
          {/* Conditional links to switch between Sign Up and Sign In */}
          {showSignUp ? (
            <p>
              Already have an account?{" "}
              <button onClick={handleShowSignIn}>Sign In</button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button onClick={handleShowSignUp}>Sign Up</button>
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Landing;
