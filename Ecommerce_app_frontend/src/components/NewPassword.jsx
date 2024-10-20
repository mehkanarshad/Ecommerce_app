

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function NewPassword() {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [resetPasswordToken, setResetPasswordToken] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const accessToken = params.get("access-token");
  const client = params.get("client");
  const uid = params.get("uid");

  // Capture the token from the URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("reset_password_token"); // Capture the token
    setResetPasswordToken(token); // Store the token in state
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit the password change request
      await axios.put(
        "http://localhost:3000/auth/password",
        {
          password: newPassword,
          password_confirmation: passwordConfirmation,
          reset_password_token: resetPasswordToken, // Use the captured token
        },
        {
          headers: {
            "access-token": accessToken,
            "client": client,
            "uid": uid,
          },
        }
      );
      setMessage("Password successfully changed!");
    } catch (e) {
      setMessage("An error occurred while changing the password.");
      console.error("Error:", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <br />
        <button type="submit">Change Password</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
