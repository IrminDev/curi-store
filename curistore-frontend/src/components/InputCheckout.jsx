import React from 'react'

const InputCheckout = ({id, handleChange, placeholder, required, name, children}) => {

    return (
        <div className="relative">
            <input 
            required={required}
            type="text" 
            id={id} 
            name={name} 
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-lg shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                {children}
            </div>
        </div>
    );
};

export default InputCheckout;

