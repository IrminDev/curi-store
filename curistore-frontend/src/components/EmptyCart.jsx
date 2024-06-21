import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { SlBag } from "react-icons/sl";

const EmptyCart = ({ discoverProductsUrl }) => {
    const navigate = useNavigate(); // Usa el hook useNavigate

    const handleDiscoverProducts = () => {
        navigate(discoverProductsUrl); // Navega a la URL proporcionada
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <SlBag className="w-32 h-32 mb-4" />
            <p className="text-xl font-medium">¡Empieza un carrito de compras!</p>
            <p className="text-gray-600 mb-4">Lo mejor, solo en <span className="text-teal-950 text-4xl">C</span>uristore</p>
            <button 
                className="px-4 py-2 bg-teal-700 text-white hover:bg-teal-800 rounded-md"
                onClick={handleDiscoverProducts} // Maneja el click del botón
            >
                Descubrir productos
            </button>
        </div>
    );
}

export default EmptyCart;
