import React, { useState } from "react";
import Modal from "./Modal";
import ProfileData from "./ProfileData";

function Account() {
  // Sample data to demonstrate the table
  const initialData = {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    profile:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
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

  ///  Drop downs
  const cities = ["Nairobi", "Mombasa", "Nakuru", "Kisumu"];
  const genders = ["Male", "Female"];
  const maritalStatuses = [
    "Single",
    "In a relationship",
    "Married",
    "Divorced",
    "Separated",
  ];
  const ethnicities = ["African", "Caucasian", "Asian", "Other"];
  const livingWithOptions = ["Alone", "With Family", "With Roommates"];
  const educationLevels = ["College", "Bachelors Degree", "Masters", "None"];
  const numberOfChildrenOptions = ["None", "1", "2", "3", "4", "5+"];
  const drinkingHabitsOptions = [
    "Social Drinker",
    "Occasional Drinker",
    "Regular Drinker",
    "Doesn't Drink",
  ];
  const smokingHabitsOptions = [
    "Smoker",
    "Non-Smoker",
    "Occasional Smoker",
    "Regular Smoker",
    "Quit Smoking",
  ];

  return (
    <div className="account">
      <ProfileData formData={formData} />
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
              readOnly
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              readOnly
            />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={formData.email} readOnly />
          </label>
          <label>
            Age:
            <input type="text" name="age" value={formData.age} readOnly />
          </label>
          <label>
            Profile URL:
            <input
              type="url"
              name="profile"
              value={formData.profile}
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
            Location:
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              id="option"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              id="option"
            >
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </label>
          <label>
            Seeking Gender:
            <select
              name="seeking_gender"
              value={formData.seeking_gender}
              onChange={handleChange}
              id="option"
            >
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </label>
          <label>
            Marital Status:
            <select
              name="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
              id="option"
            >
              {maritalStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
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
            <select
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
              id="option"
            >
              {ethnicities.map((ethnicity) => (
                <option key={ethnicity} value={ethnicity}>
                  {ethnicity}
                </option>
              ))}
            </select>
          </label>
          <label>
            Living With:
            <select
              name="living_with"
              value={formData.living_with}
              onChange={handleChange}
              id="option"
            >
              {livingWithOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Education Level:
            <select
              name="education_level"
              value={formData.education_level}
              onChange={handleChange}
              id="option"
            >
              {educationLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
          <label>
            No. of Children:
            <select
              name="no_of_children"
              value={formData.no_of_children}
              onChange={handleChange}
              id="option"
            >
              {numberOfChildrenOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Drinking Habits:
            <select
              name="drinking_habits"
              value={formData.drinking_habits}
              onChange={handleChange}
              id="option"
            >
              {drinkingHabitsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Smoking Habits:
            <select
              name="smoking_habits"
              value={formData.smoking_habits}
              onChange={handleChange}
              id="option"
            >
              {smokingHabitsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Passion:
            <input
              type="text"
              name="passion"
              value={formData.passion}
              onChange={handleChange}
              id="option"
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
