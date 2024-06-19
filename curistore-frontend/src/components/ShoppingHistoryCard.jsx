import React from 'react';

const ShoppingHistoryCard = ({ icon, title, amount, color, responsive }) => {
  return (
    /* Argumentos:
      icon = (react-icon) El icono que contendrá el elemento
      tittle = (string) El nombre de lo que esta representando
      amount = (int) El valor correspondiente al elemento (Una cantidad)
      responsive = (false or true) 
        false: Mantiene 'amount' en la misma linea que el titulo
        true: Cuando la resolución sea menor, pondrá 'amount' debajo del texto 'tittle'
    */
    <div className="flex flex-col w-full sm:w-5/12 items-center space-y-2 p-3 bg-white shadow-lg rounded-lg">
      <div className={` flex w-full items-center justify-evenly ${color} space-x-2`}>
        {icon}
        <span className=" inline-block text-lg font-semibold truncate w-1/3">{title}</span>
        <span className={`${responsive ? "hidden md:inline-block" : "inline-block"} text-gray-700 text-xl font-bold`}>{amount || "---"}</span>
      </div>
      <span className={`inline-block ${responsive ? "md:hidden" : "hidden"} text-gray-700 text-xl font-bold`}>{amount || "---"}</span>
    </div>
  );
};

export default ShoppingHistoryCard;
