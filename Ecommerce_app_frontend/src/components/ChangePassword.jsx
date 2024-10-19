import React, {useState} from 'react'
import axios  from 'axios'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword , setNewPassword] = useState();

    const  handleSubmit = async (e) =>{
        await axios.post('http://localhost:3000/auth/password/edit' , {currentPassword, newPassword});

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Current Password: </label>
            <input type="password" value={currentPassword} onChange={(e) => {e.target.value}} required/>
            <br />
            <label>New Password: </label>
            <input type="password" value={newPassword} onChange={(e) => {e.target.value}} required/>
            <br /><br />
            <button type="submit">Change Password</button>
        </form>
    </div>
  )
}
