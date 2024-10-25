import { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "./Api";

export default function Profile() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
    nickname: "",
    image: "",
    provider: "",
    uid: "",
  });

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
          image: reader.result,
          imageFile: file
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
    if (user.image instanceof File) {
        formData.append('image', user.imageFile);
    }

    try{
        const updatedUser = await updateUserProfile(formData);
        console.log("Profile updated successfully", updatedUser);
    }catch(e){
        console.log("Updated user profile error ", e);
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
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {user.image && (
            <img
              src={user.image}
              alt="Profile preview"
              style={{ width: "100px", height: "50px", marginTop: "10px" }}
            />
          )}
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
