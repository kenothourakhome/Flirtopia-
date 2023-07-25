import React from 'react'

function Chat({formData}) {
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
  return (
    <div style={containerStyle}>
      <img src={formData.profile} alt="avatar" style={avatarStyle} />
      <h3 style={h3Style}>{formData.username}</h3>
      {/* <h3 style={h3Style}>{formData.number_of_unread_messages}</h3> */}
      {/* <h3 style={h3Style}>{formData.timestamp}</h3> */}
    </div>
  );
}

export default Chat