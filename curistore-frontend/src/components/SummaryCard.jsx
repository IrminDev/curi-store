// src/components/SummaryCard.js
import React from 'react';
import Button from './Button';

const SummaryCard = ({ quantity, priceItems, shipment }) => {
  const handleButtonClick = () => {
    // Aquí para redirigir a la página de método de pago
    alert('Continuar compra');
  };

  return (
    <div className="w-full bg-white shadow-xl rounded-lg p-6 space-y-4">
      <h2 className=" text-lg font-bold mb-4 text-center">Resumen de compra</h2>
      <div className="flex justify-between gap-2 mb-2">
        <span>{`Productos (${quantity})`}</span>
        <span>${priceItems}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Envío</span>
        <span className="text-green-500">{shipment ? "$"+shipment : "Gratis"}</span>
      </div>
      <div className="flex justify-between font-bold text-sm md:text-lg mb-4">
        <span>Total</span>
        <span>${}</span>
      </div>
      <Button text="Continuar compra" onClick={handleButtonClick} />
    </div>
  );
};

export default SummaryCard;
