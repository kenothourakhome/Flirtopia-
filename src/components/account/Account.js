import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ProfileData from "./ProfileData";

function Account() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Set the default values to be blank or null for the editable fields
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    age: null,
    gender: "",
    seeking_gender: "",
    location: "",
    avatar_url: "",
    marital_status: "",
    bio: "",
    interest: "",
    height: "",
    ethnicity: "",
    living_with: "",
    education_level: "",
    no_of_children: "",
    drinking_habits: "",
    smoking_habits: "",
    passion: "",
    account_status: "Active",
  });

  // Fetch the last updated user data and post it to profiles on component mount
  useEffect(() => {
    fetchLastUpdatedUser();
  }, []);

  const fetchLastUpdatedUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:9393/users/last_updated");
      if (response.ok) {
        const data = await response.json();
        // Update the formData state with the last updated user data
        console.log(data)
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          username: data.username || "",
          profile: data.profile || "",
          email: data.email || "",
          age: data.age || null,
          gender: data.gender || "",
          seeking_gender: data.seeking_gender || "",
          // Leave the rest of the fields empty
          location: "",
          avatar_url: "",
          marital_status: "",
          bio: "",
          interest: "",
          height: "",
          ethnicity: "",
          living_with: "",
          education_level: "",
          no_of_children: "",
          drinking_habits: "",
          smoking_habits: "",
          passion: "",
          account_status: "Active",
        });
      } else {
        console.log("Error fetching last updated user data");
      }
    } catch (error) {
      console.error("Error fetching last updated user data:", error);
    }
  };

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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Makes a POST request to update the profile data
      const response = await fetch("http://127.0.0.1:9393/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Profile updated successfully!");
        setIsModalOpen(false); // Close modal after submitting
      } else {
        console.error("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
          <button type="submit">Save</button>
          <button onClick={handleModalClose}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
}

export default Account;
