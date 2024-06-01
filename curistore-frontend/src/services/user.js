import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/user';

const getUsers = async (token) => {
    const response = await axios.get(`${baseUrl}s`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

const getUser = async (token, id) => {
    const response = await axios.get(`${baseUrl}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

const createAdmin = async (token, user) => {
    const response = await axios.post(`${baseUrl}`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}   


export default {getUsers, getUser, createAdmin}