import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  

function Signup({ handleShowSignIn }) {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    dob: "",
    gender: "male",
    seeking: "female",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // More form validation will go here in future
    //  
    fetch("http://127.0.0.1:9393/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Signup successful!", data);
        // You will  get a redirect to home after success signup form submission
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

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

  return (
    <div className="formwrapper">
      <h1>FLIRTOPIA</h1>
      <h3>FILL IN YOUR INFO</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          max={getMaxDate()}
          value={formData.dob}
          onChange={handleChange}
        />
        <label>I am</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>I am seeking</label>
        <select name="seeking" value={formData.seeking} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      <p>
        <span className="signword">Have an account ?</span>
        <Link to="/signin" onClick={handleShowSignIn} id="sign">
          Sign In...
        </Link>
      </p>
    </div>
  );
}

export default Signup;
