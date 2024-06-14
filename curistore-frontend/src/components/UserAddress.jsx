import React from 'react';

const UserAddress = ({ address, id, selectedAddress, setSelectedAddress }) => {
    return (
        <div className="flex items-center p-2 border-b border-gray-200">
            <input
                type="radio"
                id={`address-${id}`}
                name="user-address"
                value={id}
                checked={selectedAddress === id}
                onChange={() => setSelectedAddress(id)}
                className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <label htmlFor={`address-${id}`} className="ml-3 block text-sm leading-5 text-gray-700">
                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.zip}</p>
            </label>
        </div>
    );
};

export default UserAddress;
