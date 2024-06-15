// src/components/ProductCardStatic.js
import React from 'react';

const ProductCardStatic = ({ title, totalPrice, quantity, thumbnail }) => {
    /* Argumentos:
      tittle = (string) El nombre del producto
      totalPrice = (int) Resultado del precio unitario del producto x la cantidad 
      quantity = (int) La cantidad de piezas compradas para ese producto
      thumbnail = (url) Dirección de la imagen
    */
    return (
        <div className="w-full flex flex-col md:flex-row justify-around items-center border border-gray-300 rounded-md p-4 space-y-4 md:space-y-0">
            {/* Div para la imagen */}
            <div className="w-1/2 md:w-3/12 flex justify-center">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-1/2 md:w-3/5 object-cover"
                />
            </div>
            {/* Div para información del producto, cantidad de productos solicitados y precio final de la compra */}
            <div className=" w-full md:w-6/12 flex flex-col justify-evenly items-center p-2 space-y-4 md:space-y-0">
                <h3 className="text-sm md:text-lg font-medium text-gray-900 text-center md:text-left truncate w-[80%]">
                    {title}
                </h3>
                {/* Div para detalles de la compra (cantidad, precio y costo de envío) */}
                <div className="flex flex-wrap justify-between gap-1 w-full">
                    <div className="flex justify-evenly w-5/12">
                        <span className="text-gray-500">Cantidad:</span>
                        <span className="px-4 py-1 border-t border-b border-gray-200 text-center min-w-[2rem] md:min-w-[3rem]">{quantity}</span>
                    </div>
                    <div className="flex justify-evenly w-5/12">
                        <span className="text-gray-500">Precio:</span>
                        <span className="font-bold text-gray-900">${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardStatic;
