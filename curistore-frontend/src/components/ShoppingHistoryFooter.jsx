import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPricetags } from "react-icons/io";
import ShoppingHistoryCard from './ShoppingHistoryCard';

const ShoppingHistoryFooter = ({ finalPrice, id }) => {
    // Argumentos: finalPrice = (int) Suma total de los productos comprados
    return (
        <div className=" w-full flex justify-between items-center max-sm:flex-col">
            {/* Div para redimensionar el tamaño del boton */}
            <div className=' w-1/3 max-sm:w-full max-sm:mb-3 flex justify-center items-center'>
                <Link to={`./invoice/${id}`} className=' bg-teal-600 w-full text-white py-2 rounded-lg text-lg font-semibold text-center'>
                    Ver reporte
                </Link>
            </div>
            <ShoppingHistoryCard 
                icon={<IoIosPricetags className="text-2xl" />}
                title="Total:"
                amount={`$ ${finalPrice}`}
                color="text-green-500"
                responsive={true}
            />
        </div>
    );
}

export default ShoppingHistoryFooter;