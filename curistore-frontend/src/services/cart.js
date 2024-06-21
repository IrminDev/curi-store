import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/cart';

const getCart = async (id, token) => {
    const response = await axios.get(`${baseUrl}/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response;
}

const addToCart = async (id, token, data) => {
    const response = await axios.post(`${baseUrl}/${id}`, data, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response;
}

const removeFromCart = async (id, token, data) => {
    const response = await axios.delete(`${baseUrl}/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        data: data,
    });

    return response;
}

const updateCart = async (id, token, data) => {
    const response = await axios.put(`${baseUrl}/${id}`, data, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response;
}

const deleteUserCart = async (id, token) => {
    const response = await axios.delete(`${baseUrl}/user/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    })
    return response;
}

export default { getCart, addToCart, removeFromCart, updateCart, deleteUserCart };

