import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import NewPassword from "./components/NewPassword";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)

  return (
    <>
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/newPassword" element={<NewPassword />} />
            <Route path="/products" element={<Product/>} />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
