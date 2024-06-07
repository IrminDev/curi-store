import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/product';

const getAll = async () => {
    const response = await axios.get(`${baseUrl}s`);
    return response;
}

const getProductById = async (id) => {
    const response = await axios.get(`${baseUrl}s/${id}`);
    return response;
}

const getProductsByCategory = async (category) => {
    const response = await axios.get(`${baseUrl}s/category/${category}`);
    return response;

}

const create = async (product, token) => {
    const response = await axios.post(`${baseUrl}`, product, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}s/${id}`, newObject);
    return response;
}

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}s/${id}`);
    return response;
}

export default { getAll, create, update, remove, getProductById, getProductsByCategory };