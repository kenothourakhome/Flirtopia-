import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

function Account() {
  const [formData, setFormData] = useState({
    first_name: "",
    profile_pic: "",
    last_name: "",
    username: "",
    email: "",
    age: "",
    location: "",
    gender: "",
    seeking_gender: "",
    marital_status: "",
    bio: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="account">
      <div id="avatar">
        <label htmlFor="profile_pic">
          <img
            src={formData.profile_pic_url || "default_avatar.png"}
            alt="Profile Avatar"
            style={{ width: "150px", height: "150px", border: "5px solid black",  borderRadius: "50%" }}
          />
        </label>
        <input
          type="file"
          id="profile_pic"
          name="profile_pic"
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          username:
          <input
            type="text"
            name="username"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="text"
            name="Email"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          location:
          <input
            type="text"
            name="Location"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          gender:
          <input
            type="text"
            name="gender"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          seeking_gender:
          <input
            type="text"
            name="seeking_gender"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          marital_status:
          <input
            type="text"
            name="marital_status"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          interest:
          <input
            type="text"
            name="interest"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          bio:
          <input
            type="text"
            name="bio"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Account;
