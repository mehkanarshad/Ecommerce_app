import React from 'react'
import axios from 'axios'

export const getUserProfile = async () =>{
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const response = await axios.get('http://localhost:3000/auth/validate_token' , {
        headers:{
            'access-token': accessToken,
            'client': client,
            'uid': uid
        }
    });
    return response.data.data;

}