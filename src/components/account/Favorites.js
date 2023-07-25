import React from "react";
import Favorited from "./Favorited";

function Favorites() {
      const formData = {
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
  return (
    <div className="favorites">
      <div>
        <button>Favoutited By</button>
        <div className="favoritelist">
          <Favorited formData={formData} />
          <Favorited formData={formData} />
          <Favorited formData={formData} />
          <Favorited formData={formData} />
        </div>
      </div>
      <div>
        <button>You Favorited</button>
        <div className="favoritelist">
          <Favorited formData={formData} />
          <Favorited formData={formData} />
          <Favorited formData={formData} />
          <Favorited formData={formData} />
          <Favorited formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
