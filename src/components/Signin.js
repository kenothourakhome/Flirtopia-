import React from "react";
import { Link } from "react-router-dom";

function Signin({ handleShowSignUp }) {
  return (
    <div className="formwrapper">
      <h1>FLIRTOPIA</h1>
      <h3>FILL IN YOUR INFO</h3>
      <form>
        <input type="text" placeholder="Enter Email" name="email" />
        <input type="password" placeholder="Enter Password" name="password" />
        <button type="submit">Sign in</button>
      </form>
      <p>
        <span className="signword">Don't have an account ?</span>
        <Link to="/signup" onClick={handleShowSignUp} id="sign">
          Sign Up...
        </Link>
      </p>
    </div>
  );
}

export default Signin;
