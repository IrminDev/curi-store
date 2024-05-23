import React from 'react'

const TextArea = ({placeholder, handleChange, required, name, value}) => {
  return (
    <div className=' h-full w-full mb-3 flex px-3 py-2 flex-row items-center justify-evenly border-solid border border-teal-800 rounded-2xl'>
        <textarea className=" w-full resize-none text-teal-50 placeholder:text-teal-50 bg-transparent outline-none border-none placeholder:text-lg text-sm "
        type='text'
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        />
    </div>
  )
}

export default TextArea