import React from 'react'

const Input = ({type, handleChange, placeholder, children, required, name, value}) => {
    return (
        <div className=' w-full mb-3 flex px-3 py-2 flex-row items-center justify-evenly border-solid border border-teal-800 rounded-2xl'>
            <input
            required={required}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className=' text-teal-50 w-full max-sm:placeholder:text-sm bg-transparent border-none outline-none placeholder:text-teal-50 placeholder:font-medium'  />
            <label htmlFor={name} className=' text-white text-xl max-sm:text-base'>
                {children}
            </label>
        </div>
    )
}

export default Input