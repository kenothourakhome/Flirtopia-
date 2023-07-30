import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileData from "./ProfileData";

function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [isProfileDataVisible, setIsProfileDataVisible] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch all profiles from the server when the component mounts
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:9393/profiles");
      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
      } else {
        console.log("Error fetching profiles");
      }
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const handleViewClick = (profileData) => {
    // Show the ProfileData and set the formData to the clicked profile data
    setIsProfileDataVisible(true);
    setFormData(profileData);
  };

  return (
    <div className="profiles">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          isProfileDataVisible={isProfileDataVisible}
          handleViewClick={() => handleViewClick(profile)}
          formData={profile}
        />
      ))}
      {isProfileDataVisible && formData && <ProfileData formData={formData} />}
    </div>
  );
}

export default Profiles;
