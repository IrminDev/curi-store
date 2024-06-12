import React , { useState } from 'react'


const Checkout = () => {
    const [products, setProducts] = useState([]);
    
    const product = [
        {
            id: 12,
            title: "Brown Perfume",
            price: 40,
            quantity: 2,
            thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            quantity: 1,
            thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        },
        {
            id: 28,
            title: "3D Embellishment Art Lamp",
            price: 20,
            quantity: 3,
            thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
        },
    ]

    

    return(
        <div>Checkout</div>
    )
};

export default Checkout