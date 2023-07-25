import React from "react";
import { Link } from "react-router-dom";

function Signup({ handleShowSignIn }) {
  return (
    <div className="formwrapper">
      <h1>FLIRTOPIA</h1>
      <h3>FILL IN YOUR INFO</h3>
      <form>
        <input type="text" placeholder="Enter First Name" name="first_name" />
        <input type="text" placeholder="Enter Last Name" name="last_name" />
        <input type="text" placeholder="Enter Email" name="email" />
        <input type="text" placeholder="Enter Username" name="username" />
        <input type="password" placeholder="Enter Password" name="password" />
        <label>Date of Birth</label>
        <input type="date" name="dob" max={getMaxDate()} />
        <label>I am</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>I am seeking</label>
        <select name="seeking">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      <p >
        <span className="signword">Have an account ?</span>
        <Link to="/signin" onClick={handleShowSignIn} id="sign">
          Sign In...
        </Link>
      </p>
    </div>
  );
}

export default Signup;

// Helper function to calculate the maximum date for the date picker (18 years ago from the current date)
function getMaxDate() {
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  return maxDate.toISOString().split("T")[0];
}

 

