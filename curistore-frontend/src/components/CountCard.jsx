import React from 'react'

const CountCard = ({children, background, number, label}) => {
  return (
    <div className={`${background} shadow-lg w-[20%] h-24 rounded-2xl flex flex-row max-md:w-[40%] mb-10`}>
        <div className=' max-sm:w-full w-[60%] flex flex-col items-center justify-center py-3 text-teal-50'>
            <h1 className='text-4xl font-bold max-lg:text-2xl'>{number}</h1>
            <p className='text-lg max-lg:text-base'>{label}</p>
        </div>
        <div className=' max-sm:hidden text-teal-50 text-5xl flex flex-col justify-center items-center max-lg:text-3xl'>
            {children}
        </div>
    </div>
  )
}

export default CountCard