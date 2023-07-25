import React from "react";

function Favorited({ formData }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "1%",
  };

  const avatarStyle = {
    width: "50px",
    border: "2px solid grey",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const h3Style = {
    fontSize: "14px",
    margin: "0",
    flexGrow: 1,
  };

  const buttonStyle = {
    fontSize: "12px",
    padding: "5px 10px",
    margin: "5px",
    maxWidth: "75px",  
  };

  return (
    <div style={containerStyle}>
      <img src={formData.profile} alt="avatar" style={avatarStyle} />
      <h3 style={h3Style}>{formData.username}</h3>
      <h3 style={h3Style}>{formData.location}</h3>
      <h3 style={h3Style}>{formData.age}</h3>
      <button style={buttonStyle}>Delete</button>
      <button style={buttonStyle}>Chat</button>
    </div>
  );
}

export default Favorited;

