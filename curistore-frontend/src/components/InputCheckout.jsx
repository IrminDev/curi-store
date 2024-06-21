import React from 'react'

const InputCheckout = ({id, handleChange, placeholder, required, name, children}) => {

    return (
        <div className="flex flex-row rounded-md border border-gray-200 py-3 w-full">
            <div className="pointer-events-none w-[10%] flex justify-center items-center text-lg text-slate-600">
                {children}
            </div>
            <input 
            required={required}
            type="text" 
            id={id} 
            name={name} 
            placeholder={placeholder}
            onChange={handleChange}
            className=" w-[90%] text-lg shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
        </div>
    );
};

export default InputCheckout;

