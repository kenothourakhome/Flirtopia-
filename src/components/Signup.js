import React from "react";

function Signup() {
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
        <p>
          By creating an account you agree to our{" "}
          {/* <a href="#" style={{ color: "dodgerblue" }}> Terms & Privacy</a> */}
          
        </p>
        <button type="submit">Signup</button>
      </form>
      <p>
        Have an account ? Then Sign in {" "}
        {/* <a href="#" style={{ color: "dodgerblue" }}> Sign in </a> */}
        .
      </p>
    </div>
  );
}

export default Signup;

 

