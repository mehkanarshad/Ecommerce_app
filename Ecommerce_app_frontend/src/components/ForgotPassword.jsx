import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/password/", {
        email,
        redirect_url: "http://localhost:5173/newPassword",
      });
      setMessage("Password reset instructions sent to your E-mail");
    } catch (e) {
      setMessage("Error sending E-mail");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <br></br>
        <button type="submit">Send Reset Instructions</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
