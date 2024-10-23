import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import NewPassword from "./components/NewPassword";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="navbar">
          <Link className="navbar-text" to="/login">
            Login
          </Link>{" "}
          {"  |  "}
          <Link className="navbar-text" to="/signup">
            Sign Up
          </Link>{" "}
          {"  |  "}
          <Link className="navbar-text" to="/">
            Home
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/newPassword" element={<NewPassword />} />

          </Routes>
        </div>
        
        <Profile/>

      </Router>
    </>
  );
}

export default App;
