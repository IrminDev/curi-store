// src/components/ShoppingHistoryHeader.jsx
import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import ShoppingHistoryCard from './ShoppingHistoryCard';

const ShoppingHistoryHeader = ({ quantityShopping, totalPrice }) => {
  /* Argumentos:
      quantityShopping = Cantidad de productos comprados hasta ahora
      totalPrice = Cantidad de dinero gastada hasta el momento
  */
  return (
    <div className=" pt-24 pb-4 bg-gray-100 shadow-md flex justify-center items-center w-full">
      <div className=" flex justify-evenly w-4/5 items-center space-x-2">
        <ShoppingHistoryCard
          icon={<FaShoppingBag className="text-2xl" />}
          title="Compras"
          amount={quantityShopping}
          color="text-green-500"
          responsive={true}
        />
        <ShoppingHistoryCard
          icon={<CiCreditCard1 className="text-2xl" />}
          title="Gastos"
          amount={`$ ${totalPrice}`}
          color="text-pink-500"
          responsive={true}
        />
      </div>
    </div>
  );
};

export default ShoppingHistoryHeader;