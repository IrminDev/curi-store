import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api/address";

const getAddresses = async (id, token) => {
    const response = await axios.get(`${baseUrl}es/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const getAddress = async (id, token) => {
    const response = await axios.get(`${baseUrl}/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const createAddress = async (data, token) => {
    const response = await axios.post(baseUrl, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

export default {
    getAddresses,
    getAddress,
    createAddress
}