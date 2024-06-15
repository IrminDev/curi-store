import React from 'react';
import Button from './Button';
import { IoIosPricetags } from "react-icons/io";
import ShoppingHistoryCard from './ShoppingHistoryCard';

const ShoppingHistoryFooter = ({ finalPrice }) => {
    // Argumentos: finalPrice = (int) Suma total de los productos comprados
    return (
        <div className=" w-full flex justify-between items-center">
            {/* Div para redimensionar el tamaño del boton */}
            <div className=' w-1/3'>
                <Button text={"Ver reporte"} />
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