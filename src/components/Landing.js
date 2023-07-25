import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Signin from "./Signin";
import "./Landing.css";
import Footer from "./Footer";
import About from "./About";
import Safety from "./Safety";
import Features from "./Features";
import Compatibility from "./Compatibility";

function Landing() {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleShowSignUp = () => {
    setShowSignUp(true);
  };

  const handleShowSignIn = () => {
    setShowSignUp(false);
  };

  return (
    <div className="landing">
      <div className="landingspace">
        <div className="signup-container">
          {showSignUp ? (
            <Signup handleShowSignIn={handleShowSignIn} />
          ) : (
            <Signin handleShowSignUp={handleShowSignUp} />
          )}
        </div>
        <div>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/compatibility" element={<Compatibility />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
