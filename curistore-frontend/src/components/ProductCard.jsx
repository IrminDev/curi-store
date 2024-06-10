// src/components/ProductCard.js
import React, { useState } from 'react';
import Counter from './Counter';

const ProductCard = ({ id, title, price, stock, quantity, thumbnail, onRemove }) => {
    const [totalPrice, setTotalPrice] = useState(price);
    const handleCountChange = (count) => {
        setTotalPrice(price * count);
    };

    return (
        <div className="w-full flex flex-col md:flex-row justify-around items-center border border-gray-200 rounded-md p-4 space-y-4 md:space-y-0">
            {/* Div para la imagen */}
            <div className="w-1/2 md:w-3/12 flex justify-center">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-1/2 md:w-3/5 object-cover"
                />
            </div>
            {/* Div para información del producto y opciones */}
            <div className="w-full md:w-6/12 flex flex-col justify-between items-center p-2 space-y-4 md:space-y-0">
                <h3 className="text-sm md:text-lg font-medium text-gray-900 text-center md:text-left">
                    {title}
                </h3>
                <div className="flex flex-wrap justify-around gap-1 w-full">
                    <button className="grow px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => onRemove(id)}>
                        Eliminar
                    </button>
                    <button className="grow px-4 py-2 rounded-md bg-teal-700 text-white hover:bg-teal-800">
                        Comprar ahora
                    </button>
                </div>
            </div>
            {/* Div para detalles de la compra (cantidad, precio y costo de envío) */}
            <div className="w-full md:w-3/12 flex flex-col justify-between items-center space-y-2">
                <Counter quantity={quantity} id={id} stock={stock} onCountChange={handleCountChange} />
                <div className="flex justify-between w-full">
                    <span className="text-gray-500">Precio:</span>
                    <span className="font-bold text-gray-900">${totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
