import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/auth/sign_in",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const user = response.data.data;
        const headers = response.headers;
        localStorage.setItem("access-token", headers["access-token"]);
        localStorage.setItem("client", headers["client"]);
        localStorage.setItem("uid", headers["uid"]);

        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Login-error", error);
        setError(error.response?.data?.errors || "Sign-in failed.");
      });
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br></br>
        <br></br>
        <button type="submit">Login</button>
        <button><Link to="/forgotPassword">Forgot your password</Link> </button>
      </form>
    </div>
  );
}
