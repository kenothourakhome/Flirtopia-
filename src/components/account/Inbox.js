import React from 'react'
import Chat from './Chat';
import Chatspace from './Chatspace';

function Inbox() {
      const formData = {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
        profile:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        email: "john@example.com",
      };
  return (
    <div className="messages">
      <div className="inbox">
        <Chat formData={formData} />
        <Chat formData={formData} />
        <Chat formData={formData} />
        <Chat formData={formData} />
      </div>
      <div className="chat">
        <Chatspace/>
      </div>
    </div>
  );
}

export default Inbox;