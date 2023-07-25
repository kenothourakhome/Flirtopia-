import React from "react";

function Chatspace() {
  const formData = {
    username: "johndoe",
    profile:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };

  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const profileNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const messagesStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  };

  const messageStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "5px",
  };

  const inputContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const inputStyle = {
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img src={formData.profile} alt="avatar" style={avatarStyle} />
        <span style={profileNameStyle}>John Doe</span>
      </div>
      <div style={messagesStyle}>
        <h3 style={messageStyle}>Message 1</h3>
        <h3 style={messageStyle}>Message 2</h3>
        <h3 style={messageStyle}>Message 3</h3>
        <h3 style={messageStyle}>Message 4</h3>
      </div>
      <div style={inputContainerStyle}>
        <input placeholder="Write your text" style={inputStyle} />
      </div>
    </div>
  );
}

export default Chatspace;
