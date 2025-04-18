import React from "react";
import "../styles/Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className={isHome ? "navbar" : "navbar-dark"}>
      {loggedIn ? (
        <>
          <div className="left-navbar">
            <Link className="navbar-text" to="/">
              Home
            </Link>
          </div>
          <div className="right-navbar">
            <Link className="navbar-text" to="/profile">
              Profile
            </Link>
            <Link className="navbar-text" to="/products">
              Products
            </Link>
            <Logout />
          </div>
        </>
      ) : (
        <>
          <Link className="navbar-text" to="/login">
            Login
          </Link>{" "}
          {"  |  "}
          <Link className="navbar-text" to="/signup">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
