import React from 'react'

const ProductCheckout = ({ id, title, price, quantity, totalPrice, thumbnail}) => {

    return (
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            {/*Div para la imagen (Sólo imagen)*/}
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" 
                src={thumbnail}
                alt={id} />
            {/*Div para información del producto (nombre, cantidad, precio, precioTotal)*/}
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{title}</span>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Cantidad: {quantity}</span>
                    <span className="font-semibold text-gray-600">Precio individual: {price}</span>
                </div>
                <p className="text-lg font-bold">${totalPrice}</p>
            </div>
        </div>
    );
};

export default ProductCheckout