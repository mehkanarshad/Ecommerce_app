import React from 'react'
import axios from 'axios'
import {useNavigate , useLocation} from 'react-router-dom'


export default function Logout() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/"
    const handleClick = async ()=>{
        const accessToken = localStorage.getItem('access-token');
        const uid = localStorage.getItem('uid');
        const client = localStorage.getItem('client');

        try{
            await axios.delete('http://localhost:3000/auth/sign_out' , {
                headers: {
                   "access-token": accessToken,
                   "client": client,
                   "uid": uid 
                }
            });
            localStorage.removeItem('access-token');
            localStorage.removeItem('client');
            localStorage.removeItem('uid');
            localStorage.removeItem('user');

            navigate('/login');

        }catch(e){
            console.log("Logout-error ", e);
        }

     

    }

  return (
    <div>
        <button className={isHome? 'logout-button' : 'logout-button-dark'} onClick={handleClick}>Logout</button>
    </div>
  )
}
