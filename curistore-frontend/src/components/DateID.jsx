import React from 'react';

const monthNames = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

const DateID = ({ purchaseId, day, month, year }) => {
  /* Argumentos:
      purchaseId = (int) Id de la compra
      day/ month/ year = (int) Todos son enteros
    */

  const monthName = monthNames[month - 1];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-100 p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto my-4">
      <div className="flex items-center text-blue-600">
        <span className="font-bold text-lg">ID de compra: </span>
        <span className="ml-2 text-xl">{purchaseId}</span>
      </div>
      <div className="flex items-center text-blue-600 mt-2 md:mt-0">
        <span className="font-bold text-lg">Fecha: </span>
        <span className="ml-2 text-xl">{`${day} de ${monthName} del ${year}`}</span>
      </div>
    </div>
  );
};

export default DateID;
