import addressService from "./address";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api/purchase";

const storePurchase = async (data, token) => {
    const response = await axios.post(baseUrl, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const storePurchaseNoAddress = async (data, token) => {
    const resp1 = await addressService.createAddress({
        user_id: data.user_id,
        address: data.address.address,
        city: data.address.city,
        state: data.address.state,
        zip: data.address.zip
    }, token);
    const address = resp1.data.data;
    const purchaseData = {
        user_id: data.user_id,
        address_id: address.id,
        products: data.products
    }

    const response = await axios.post(baseUrl, purchaseData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const getPurchases = async (id,token) => {
    const response = await axios.get(`${baseUrl}s/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const getPurchase = async (id, token) => {
    const response = await axios.get(`${baseUrl}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    return response;
}   

export default { storePurchase, storePurchaseNoAddress, getPurchases, getPurchase };