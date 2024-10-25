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


export const updateUserProfile = async () => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const response = await axios.put('http://localhost:3000/auth/profile_update',{
        headers: {
            'access-token': accessToken,
            'client': client,
            'uid': uid ,
            'content-type': 'multipart/form-data'
        }
    });
    return response.data.data;
}