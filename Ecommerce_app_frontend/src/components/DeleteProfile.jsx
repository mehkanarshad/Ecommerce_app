import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DeleteProfile() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const accessToken = localStorage.getItem("access-token");
    const uid = localStorage.getItem("uid");
    const client = localStorage.getItem("client");

    if (window.confirm("Are you sure you want to delete your profile")) {
      try {
        await axios.delete("http://localhost:3000/auth/", {
          headers: {
            "access-token": accessToken,
            client: client,
            uid: uid,
          },
        });

        localStorage.removeItem("access-token");
        localStorage.removeItem("client");
        localStorage.removeItem("uid");

        navigate("/login");
      } catch (e) {
        console.log("Delete Profile error", e);
      }
    }
  };

  return (
    <div>
      <button onClick={handleClick}> Delete Profile </button>
    </div>
  );
}
