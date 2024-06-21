import React from 'react';

const DateID = ({ purchaseId, date }) => {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-100 p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto my-4">
      <div className="flex items-center text-blue-600">
        <span className="font-bold text-lg max-sm:text-sm">ID de compra: </span>
        <span className="ml-2 text-xl max-sm:text-base">{purchaseId}</span>
      </div>
      <div className="flex items-center text-blue-600 mt-2 md:mt-0">
        <span className="font-bold text-lg max-sm:text-sm">Fecha: </span>
        <span className="ml-2 text-xl max-sm:text-base">{date}</span>
      </div>
    </div>
  );
};

export default DateID;
