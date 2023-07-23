import React, { useState } from "react";
import Modal from "./Modal";

function Account() {
  // Sample data to demonstrate the table
  const initialData = {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    email: "john@example.com",
    age: 30,
    location: "New York",
    gender: "Male",
    seeking_gender: "Female",
    marital_status: "Single",
    bio: "Lorem ipsum dolor sit amet...",
    interest: "Hiking, Photography",
    height: "6'2\"",
    ethnicity: "Caucasian",
    living_with: "Alone",
    education_level: "Bachelor's Degree",
    no_of_children: "0",
    drinking_habits: "Social Drinker",
    smoking_habits: "Non-Smoker",
    passion: "Traveling, Music",
    account_status: "Active",
    user_id: 101,
    created_at: "2023-07-23 12:34:56",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call to update data)
    console.log(formData);
    setIsModalOpen(false); // Close the modal after submitting
  };

  return (
    <div className="account">
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{formData.id}</td>
          </tr>
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
            <td>Passion:</td>
            <td>{formData.passion}</td>
          </tr>
          <tr>
            <td>Account Status:</td>
            <td>{formData.account_status}</td>
          </tr>
          <tr>
            <td>User ID:</td>
            <td>{formData.user_id}</td>
          </tr>
          <tr>
            <td>Created At:</td>
            <td>{formData.created_at}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleEditClick}>Edit</button>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Edit Details</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            ID:
            <input type="text" name="id" value={formData.id} readOnly />
          </label>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </label>
          <label>
            Seeking Gender:
            <input
              type="text"
              name="seeking_gender"
              value={formData.seeking_gender}
              onChange={handleChange}
            />
          </label>
          <label>
            Marital Status:
            <input
              type="text"
              name="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
            />
          </label>
          <label>
            Bio:
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </label>
          <label>
            Interest:
            <input
              type="text"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            />
          </label>
          <label>
            Height:
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
          <label>
            Ethnicity:
            <input
              type="text"
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
            />
          </label>
          <label>
            Living With:
            <input
              type="text"
              name="living_with"
              value={formData.living_with}
              onChange={handleChange}
            />
          </label>
          <label>
            Education Level:
            <input
              type="text"
              name="education_level"
              value={formData.education_level}
              onChange={handleChange}
            />
          </label>
          <label>
            No. of Children:
            <input
              type="text"
              name="no_of_children"
              value={formData.no_of_children}
              onChange={handleChange}
            />
          </label>
          <label>
            Drinking Habits:
            <input
              type="text"
              name="drinking_habits"
              value={formData.drinking_habits}
              onChange={handleChange}
            />
          </label>
          <label>
            Smoking Habits:
            <input
              type="text"
              name="smoking_habits"
              value={formData.smoking_habits}
              onChange={handleChange}
            />
          </label>
          <label>
            Passion:
            <input
              type="text"
              name="passion"
              value={formData.passion}
              onChange={handleChange}
            />
          </label>
          <label>
            Account Status:
            <input
              type="text"
              name="account_status"
              value={formData.account_status}
              readOnly
            />
          </label>
          <label>
            User ID:
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              readOnly
            />
          </label>
          <label>
            Created At:
            <input
              type="text"
              name="created_at"
              value={formData.created_at}
              readOnly
            />
          </label>
          <button type="submit">Save</button>
          <button onClick={handleModalClose}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
}

export default Account;
