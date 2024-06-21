import React from 'react'

const ComboInput = ({options, handleChange, placeholder, name, children, required, value}) => {
    return (
        <div className=' w-full mb-3 flex px-3 py-2 flex-row items-center justify-evenly border-solid border border-teal-800 rounded-2xl'>
            <select
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
            defaultValue='default'
            className=' text-teal-50 w-full max-sm:placeholder:text-sm bg-transparent border-none outline-none placeholder:text-teal-50 placeholder:font-medium' 
            >
                 <option disabled id='default' className=' text-teal-950' value="default">{placeholder}</option>
                {options.map(option => {
                    return (
                        <option key={option.value} className=' text-teal-950' value={option.value}>{option.text}</option>
                    )
                })}
            </select>
            <label htmlFor={name} className=' max-sm:hidden text-white text-xl max-sm:text-base'>
                {children}
            </label>
        </div>
    )
}

export default ComboInput