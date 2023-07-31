import React from "react";

function ProfileData({ formData }) {
  return (
    <div>
      <img id="avatar" src={formData.avatar_url} alt="avatar" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "4%",
        }}
      >
        <button
          style={{
            maxWidth: "5em",
            padding: "4px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Favorite
        </button>
        <button
          style={{
            maxWidth: "5em",
            padding: "4px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Chat
        </button>
      </div>

      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{formData.first_name}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{formData.last_name}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{formData.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{formData.age}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{formData.location}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{formData.gender}</td>
          </tr>
          <tr>
            <td>Seeking Gender:</td>
            <td>{formData.seeking_gender}</td>
          </tr>
          <tr>
            <td>Marital Status:</td>
            <td>{formData.marital_status}</td>
          </tr>
          <tr>
            <td>Bio:</td>
            <td>{formData.bio}</td>
          </tr>
          <tr>
            <td>Interest:</td>
            <td>{formData.interest}</td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{formData.height}</td>
          </tr>
          <tr>
            <td>Ethnicity:</td>
            <td>{formData.ethnicity}</td>
          </tr>
          <tr>
            <td>Living With:</td>
            <td>{formData.living_with}</td>
          </tr>
          <tr>
            <td>Education Level:</td>
            <td>{formData.education_level}</td>
          </tr>
          <tr>
            <td>No. of Children:</td>
            <td>{formData.no_of_children}</td>
          </tr>
          <tr>
            <td>Drinking Habits:</td>
            <td>{formData.drinking_habits}</td>
          </tr>
          <tr>
            <td>Smoking Habits:</td>
            <td>{formData.smoking_habits}</td>
          </tr>
          <tr>
            <td>Profile URL:</td>
            <td>{formData.avatar_url}</td>
          </tr>

          <tr>
            <td>Passion:</td>
            <td>{formData.passion}</td>
          </tr>
          <tr>
            <td>Account Status:</td>
            <td>{formData.account_status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfileData;
