import React from "react";

function Modal({ isOpen, onClose, children }) {
 const modalStyle = {
   display: isOpen ? "block" : "none",
   position: "fixed",
   top: 0,
   left: 0,
   width: "100%",
   height: "100%",
   backgroundColor: "rgba(0, 0, 0, 0.5)",
   zIndex: 9999,
   overflow: "auto",
   padding: "20px",
 };

 const contentStyle = {
   position: "fixed",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   backgroundColor: "#fff",
   borderRadius: "8px",
   maxWidth: "100%",
   maxHeight: "90%",  
   padding: "10px",
   margin: "10px", 
   overflow: "auto",  
 };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
