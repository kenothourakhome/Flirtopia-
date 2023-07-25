import "./App.css";
import Landing from "./components/Landing";
import Home from './components/account/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Safety from "./components/Safety";
import Compatibility from "./components/Compatibility";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Features from "./components/Features";
import Account from "./components/account/Account";
import Profiles from "./components/account/Profiles";
import Favorites from "./components/account/Favorites";
import ProfileData from "./components/account/ProfileData";
import Error from "./components/Error";
import Inbox from "./components/account/Inbox";
function App() {
  return (
    <Router className="App">
      <Routes className="content-wrapper">
        <Route path="/" element={<Landing />}>
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/home" element={<Home />}>
          <Route path="/home/myaccount" element={<Account />} />
          <Route path="/home/browse" element={<Profiles />} />
          <Route path="/home/messages" element={<Inbox />} />
          <Route path="/home/favourites" element={<Favorites />} />
          <Route path="/home/viewedprofile" element={<ProfileData />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
