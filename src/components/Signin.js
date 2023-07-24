// import React from 'react'
// import { Link } from 'react-router-dom';

// function Signin() {
//   return (
//     <div>
//       <div className="formwrapper">
//         <h1>FLIRTOPIA</h1>
//         <h3>FILL IN YOUR INFO</h3>
//         <form>
//           <input type="text" placeholder="Enter Username" name="username" />
//           <input type="password" placeholder="Enter Password" name="password" />
//           <button type="submit">Sigin</button>
//         </form>
//         <p>
//           Dont have an account ? Then Sign up <Link to="/signin">Signin</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signin

// import React from "react";
// import { Link } from "react-router-dom";

// function Signin() {
//   return (
//     <div>
//       <div className="formwrapper">
//         <h1>FLIRTOPIA</h1>
//         <h3>FILL IN YOUR INFO</h3>
//         <form>
//           <input type="text" placeholder="Enter Username" name="username" />
//           <input type="password" placeholder="Enter Password" name="password" />
//           <button type="submit">Sign in</button>
//         </form>
//         <p>
//           Don't have an account? Then <Link to="/signup">Sign up</Link>.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signin;



import React from "react";
import { Link } from "react-router-dom";

function Signin({ handleShowSignUp }) {
  return (
    <div className="formwrapper">
      <h1>FLIRTOPIA</h1>
      <h3>FILL IN YOUR INFO</h3>
      <form>
        <input type="text" placeholder="Enter Username" name="username" />
        <input type="password" placeholder="Enter Password" name="password" />
        <button type="submit">Sign in</button>
      </form>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
}

export default Signin;
