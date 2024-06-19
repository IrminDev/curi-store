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
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    {children}
                </svg>
            </div>
        </div>
    );
};

export default InputCheckout;
