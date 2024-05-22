import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({children}) => {
  return (
    <div className=" fixed left-0 top-0 w-[100%] bg-primary z-10 shadow-md">
        <div className=" ml-[1rem] mr-[1rem] h-[4rem] flex justify-between items-center min-[780px]:h-[5rem] min-[1024px]:w-[100%] min-[1024px]:px-[10%] min-[1024px]:justify-between">
            <Link to={'./'} className=" text-primary-lighter text-3xl font-bold"><span className=" text-teal-950 text-4xl">C</span>uristore</Link>
            <div className="max-md:fixed max-md:bottom-0 max-md:left-0 max-md:bg-teal-700 max-md:shadow-[0_-1px_12px_hsla(207, 89%, 15%, 0.15)] max-md:w-[100%] max-md:h-[4rem] max-md:py-[1rem] max-md:grid max-md:content-center max-md:rounded-[1.25rem_1.25rem_0_0]">
                <ul className="flex justify-around sm:gap-x-10">
                    {children}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header