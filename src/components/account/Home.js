import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profiles from "./Profiles";
import Account from "./Account";
import Messages from "./Messages";
import Favorites from "./Favorites";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="myaccount" element={<Account />} />
          <Route path="browse" element={<Profiles />} />
          <Route path="messages" element={<Messages />} />
          <Route path="favourites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
