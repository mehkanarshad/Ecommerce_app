import axios from 'axios'

export const getUserProfile = async () =>{
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const response = await axios.get('http://localhost:3000/user/profile' , {
        headers:{
            'access-token': accessToken,
            'client': client,
            'uid': uid
        }
    });
    return response.data.data;

}


export const updateUserProfile = async (formData) => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const response = await axios.put('http://localhost:3000/user/update',formData,{
        headers: {
            'access-token': accessToken,
            'client': client,
            'uid': uid ,
            'content-type': 'multipart/form-data',
        }
    });
    return response.data;
}


export const getProducts = async () => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const response = await axios.get('http://localhost:3000/products', {
        headers: {
            'access-token': accessToken,
            'client': client,
            'uid': uid
        }
    })
    return response.data;
}