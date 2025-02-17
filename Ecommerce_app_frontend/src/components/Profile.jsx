import { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "./Api";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
    role: "",
    nickname: "",
    image: "",
    provider: "",
    uid: "",
  });
  const [message, setMessage] = useState('')
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setUser(userProfile);
        console.log(userProfile);
      } catch (e) {
        console.log("Fetch profile error", e);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          imageFile: reader.result,
          image: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('name', user.name);
    formData.append('nickname', user.nickname);
    formData.append('role', user.role);
    if (user.image instanceof File) {
        formData.append('image', user.image);
    }

    try{
        const updatedUser = await updateUserProfile(formData);
        console.log("Profile updated successfully", updatedUser);
        setMessage('Profile updated successfully')
    }catch(e){
        console.log("Updated user profile error ", e);
        setMessage('Failed to update profile')
    }
  }

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user?.name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={user?.email || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="nickname">NickName: </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={user?.nickname || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Your current role is: {user?.role}</p>
        </div>
        <div>
          <label htmlFor="role">Role: </label>
          <select
            type="text"
            name="role"
            id="role"
            value={user?.role || ""}
            onChange={handleInputChange}
          >
            <option value="Customer">Customer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {user.imageFile && (
            <img
              src={user.imageFile}
              alt="Profile preview"
              style={{ width: "100px", height: "50px", marginTop: "10px" }}
            />
          )}
            {(user.imageFile || user.image_url) && (
            <img
              src={user.imageFile || user.image_url} 
              alt="Profile preview"
              style={{ width: "100px", height: "50px", marginTop: "10px" }}
            />
          )}
        </div>
        <button type="submit">Save Changes</button>
        {
          message && (
            <div>
              {message}
            </div>
          )

        }
      </form>
    </div>
  );
}
