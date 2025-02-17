import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate,
  } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        {/* {loggedIn ? (
          <>
            <Link className="navbar-text" to="/">
              Home
            </Link>{" "}
            {"  |  "}
            <Link className="navbar-text" to="/profile">
              Profile
            </Link>
            {"  |  "}
            <Link className="navbar-text" to="/products">
              Products
            </Link>
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
        {console.log(loggedIn)} */}
      </div>
    </div>
  );
}
