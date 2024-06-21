import React from 'react'
import { Link } from 'react-router-dom'

const ProductCardIndex = ({product, handleOnClick}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex mt-2 flex-col justify-between h-full">
            <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover object-center" />
            <div className="flex-grow p-4 flex flex-col justify-between">
                <div>
                    <Link to={`./product/${product.id}`}>
                        <h3 className="text-gray-700 font-semibold">{product.title}</h3>
                    </Link>
                    <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                    {/* Aquí está la etiqueta span */}
                    <span className="text-gray-900 font-bold">${product.price}</span>
                    {/* Aquí está la etiqueta button */}
                    <button 
                    onClick={() => handleOnClick(product.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCardIndex