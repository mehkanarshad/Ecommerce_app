// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// export default function NewPassword() {
//   const [passwordConfirmation, setPasswordConfirmation] = useState();
//   const [newPassword, setNewPassword] = useState();
//   const [message, setMessage] = useState("");

//   const params = new URLSearchParams(location.search);
//   const access_token  = params.get('access-token');
//   const client = params.get('client');
//   const uid = params.get('uid');
//   const resetPasswordToken = params.get('reset_password_token');

//   const handleSubmit = async (e) => {
//     try {
//       await axios.put("http://localhost:3000/auth/password/new", {
//         password: newPassword,
//         password_confirmation: newPassword,
//         resetPasswordToken: resetPasswordToken
//       },{
//         headers:{
//             "access-token": access_token,
//             "client": client,
//             "uid": uid,
//         }
//       });
//       setMessage("successfully changed the password");
//     } catch (e) {
//       setMessage("some error occured");
//       console.log("New password occured", e);

//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <br />
//         <label>New Password: </label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => {
//             setNewPassword(e.target.value);
//           }}
//           required
//         />
//         <br />
//         <label>Password Confirmation: </label>
//         <input
//           type="password"
//           value={passwordConfirmation}
//           onChange={(e) => {
//             setPasswordConfirmation(e.target.value);
//           }}
//           required
//         />
//         <br />
//         <br />
//         <button type="submit">Change Password</button>
//         {message && <p>{message}</p>}
//       </form>
//     </div>
//   );
// }





import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import to access URL params

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation(); // To get query parameters from URL

  // Extract reset_password_token from the URL
  const params = new URLSearchParams(location.search);
  const resetPasswordToken = params.get("reset_password_token");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:3000/auth/password",
        {
          password: newPassword,
          password_confirmation: confirmPassword,
          reset_password_token: resetPasswordToken, // Include the token here
        }
      );
      setMessage("Password successfully changed");
    } catch (error) {
      setMessage("An error occurred while changing the password");
      console.error("Password reset error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Password: </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Change Password</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
