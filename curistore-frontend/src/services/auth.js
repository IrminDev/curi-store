import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/auth/';

const login = async ({email, password}) =>{
    const response = await axios.post(`${baseUrl}login`, {
        email: email,
        password: password
    })

    return response;
}

const me = async (token) => {
    const response = await axios.post(`${baseUrl}me`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

const register = async (user) => {
    const response = await axios.post(`${baseUrl}register`, user);

    return response;
}

const logout = async (token) => {
    const response = await axios.post(`${baseUrl}logout`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

export default {login, me, register, logout}