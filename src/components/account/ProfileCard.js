import React from "react";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-picture">
        <img
          src="https://images.unsplash.com/photo-1580599003360-0a758620778d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
          alt="profile"
        />
      </div>
      <div className="profile-details">
        <h2>Orandi</h2>
        <h4>Age 58</h4>
        <h4>Rongai</h4>
      </div>
    </div>
  );
}

export default ProfileCard;
