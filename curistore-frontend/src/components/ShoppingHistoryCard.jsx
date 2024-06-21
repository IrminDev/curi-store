import React from 'react';

const ShoppingHistoryCard = ({ icon, title, amount, color, responsive }) => {
  return (
    <div className="flex flex-col w-full sm:w-5/12 items-center space-y-2 p-3 bg-white shadow-lg rounded-lg">
      <div className={` flex w-full items-center justify-evenly ${color} space-x-2`}>
        {icon}
        <span className=" inline-block text-lg font-semibold truncate max-sm:w-full text-center">{title}</span>
        <span className={`${responsive ? "hidden md:inline-block" : "inline-block"} text-gray-700 text-xl font-bold`}>{amount || "---"}</span>
      </div>
      <span className={`inline-block ${responsive ? "md:hidden" : "hidden"} text-gray-700 text-xl font-bold`}>{amount || "---"}</span>
    </div>
  );
};

export default ShoppingHistoryCard;
