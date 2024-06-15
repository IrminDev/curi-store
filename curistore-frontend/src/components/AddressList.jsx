import React, { useState } from 'react';
import UserAddress from './UserAddress';

const AddressList = ({ onAddAddressClick }) => {
    const initialAddresses = [
        {
            id: 1,
            address: "Calle Antonio Caso 24 Col. San Rafael",
            city: "Cuauhtemoc",
            state: "Mexico",
            zip: 11928,
            user_id : 2,
        },
        {
            id: 2,
            address: "Calle Rio Rhin 221 Col. Cuauhtemoc",
            city: "Cuauhtemoc",
            state: "Mexico",
            zip: 11218,
            user_id : 2,
        },
        {
            id: 3,
            address: "Calle Tenochtitlan 101 Col. Aviacion Civil",
            city: "Venustiano Carranza",
            state: "Mexico",
            zip: 24736,
            user_id : 2,
        },
    ]

    const [selectedAddress, setSelectedAddress] = useState(null);

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {initialAddresses.length > 0 && (
                <div className="py-4 px-6">
                    <h2 className="text-lg font-medium text-gray-900">Select an Address</h2>
                    <div className="mt-4">
                        <div className="max-h-64 overflow-y-auto no-scrollbar">
                            {initialAddresses.map(address => (
                                <UserAddress
                                    key={address.id}
                                    id={address.id}
                                    address={address}
                                    selectedAddress={selectedAddress}
                                    setSelectedAddress={setSelectedAddress}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="py-4 px-6">
                <button
                onClick={onAddAddressClick}
                className="bg-teal-700 max-sm:text-base w-full text-teal-50 font-semibold py-3 rounded-3xl text-xl"
                >
                Agregar dirección
                </button>
            </div>
        </div>
    );
};

export default AddressList;
