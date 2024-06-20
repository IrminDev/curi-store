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
            id: 1,
            address: "Calle Antonio Caso 24 Col. San Rafael",
            city: "Cuauhtemoc",
            state: "Mexico",
            zip: 11928,
            user_id : 2,
        },
        {
            id: 1,
            address: "Calle Antonio Caso 24 Col. San Rafael",
            city: "Cuauhtemoc",
            state: "Mexico",
            zip: 11928,
            user_id : 2,
        },
        {
            id: 1,
            address: "Calle Antonio Caso 24 Col. San Rafael",
            city: "Cuauhtemoc",
            state: "Mexico",
            zip: 11928,
            user_id : 2,
        },
        {
            id: 1,
            address: "Calle Antonio Caso 24 Col. San Rafael",
            city: "Cuauhtemoc",
            state: "Mexico",
            zip: 11928,
            user_id : 2,
        },
    ]

    const [selectedAddress, setSelectedAddress] = useState(null);

    return (
        <div className="mt-10 flex justify-center items-center bg-gray-50 flex-col w-full px-16 pt-4 lg:mt-0 rounded-lg overflow-hidden">
            {initialAddresses.length > 0 && (
                <div className="py-4 px-1 w-full">
                    <h2 className="text-xl font-medium text-gray-900 -mt-4 lg:-mt-6">Elige una dirección</h2>
                    <div className="mt-8 p-0.25 w-full ">
                        <div className="max-h-96 border overflow-y-auto no-scrollbar px-1">
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
            <div className="py-4 px-6 w-full mt-6 pt-2 lg:pt-2">
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
