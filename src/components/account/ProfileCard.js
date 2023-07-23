import React from "react";
import ProfileData from "./ProfileData";

function ProfileCard({isProfileDataVisible, formData, handleViewClick}) {


  return (
    <div>
      {/* Show the "View" button when ProfileData is not visible */}
      {!isProfileDataVisible && (
        <div className="profile-card">
          <div className="profile-picture">
            <img src={formData.profile} alt="profile" />
          </div>
          <div className="profile-details">
            <br />
            <h2>{formData.username}</h2>
            <br />
            <h4>{formData.age}</h4>
            <br />
            <h4>{formData.location}</h4>
            <br />
            <button onClick={handleViewClick}>View</button>
            <br />
          </div>
        </div>
      )}

      {/* Show ProfileData when the "View" button is clicked */}
      {isProfileDataVisible && <ProfileData formData={formData} />}
    </div>
  );
}

export default ProfileCard;