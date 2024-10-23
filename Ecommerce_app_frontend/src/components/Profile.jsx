import {useEffect, useState} from 'react'
import axios from 'axios'
import { getUserProfile } from './Api'

export default function Profile() {
    const [user , setUser ] = useState(null);
    

    useEffect (() => {
        const fetchProfile = async () =>{
            
            try{
                const userProfile = await getUserProfile();
                setUser(userProfile);
                console.log(userProfile);

            }catch(e){
                console.log("Fetch profile error" , e);
            }
        };

        fetchProfile();
    }, []);
  return (
    <div>
        <h1>User Profile</h1>
        {/* <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="" value={user?.name} />
        </div> 
        <div>
            <label htmlFor="name">E-mail: </label>
            <input type="text" name="name" id="" value={user?.email} />
        </div> */}
    </div>
  )
}
