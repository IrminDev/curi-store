import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/stats/';

const getStats = async (token) => {
    const response = await axios.get(`${baseUrl}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

const getStatsByProducts = async (token) => {
    const response = await axios.get(`${baseUrl}product`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }); 
    
    return response;
}

const getStatsByCategories = async (token) => {
    const response = await axios.get(`${baseUrl}category`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

const getStatsByBrands = async (token) => {
    const response = await axios.get(`${baseUrl}brand`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

export default {getStats, getStatsByProducts, getStatsByCategories, getStatsByBrands}