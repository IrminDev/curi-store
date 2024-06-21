import React from 'react'
import {Link} from 'react-router-dom'

const HeaderLink = ({url, text, children}) => {
    return (
        <li className="">
            <Link to={url} className="flex transition ease-linear flex-col items-center gap-y-1 font-[600] text-primary-lighter md:hover:text-primary-light ">
                  <div className=' md:hidden'>
                     {children}
                  </div>
                <span className=" text-[0.625rem] max-[320px]:hidden md:text-lg">{text}</span>
            </Link>
        </li>
    )
}

export default HeaderLink