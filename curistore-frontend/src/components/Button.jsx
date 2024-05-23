import React from 'react'

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick} className=' bg-teal-700 max-sm:text-base w-full text-teal-50 font-semibold py-3 rounded-3xl text-xl'>
            {text}
        </button>
    )
}

export default Button