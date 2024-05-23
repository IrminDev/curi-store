import React from 'react'
import CountCard from '../../components/CountCard'
import { FaTags, FaBox } from "react-icons/fa";
import UserInfo from '../../components/UserInfo';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <div className=' flex flex-col justify-center items-center mt-20 bg-teal-100'>
            <div className=' h-auto flex flex-row flex-wrap items-center justify-evenly w-full my-5'>
                <CountCard number={0} label={'Usuarios'} background={'bg-teal-800'}>
                    <FaBox/>
                </CountCard>
                <CountCard number={0} label={'Administradores'} background={'bg-teal-700'}>
                    <FaTags/>
                </CountCard>
                <div>
                    <Link className=' w-[50%] py-3 px-4 rounded-xl bg-teal-600 text-xl text-teal-50 font-semibold' to={'../user-form'}>Agregar administrador</Link>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20 w-[90%]'>
                <div className=' w-full border-b-4 border-teal-800 pb-2 mb-4'>
                    <h2 className=' text-4xl font-bold text-teal-800'>Productos</h2>
                </div>
                <div className=' flex flex-col items-center justify-evenly w-[90%] max-sm:w-full rounded-2xl bg-teal-50 '>
                    <div className=' py-2 w-full grid grid-cols-3 text-center max-sm:text-base text-xl font-bold border-b-2 border-teal-400'>
                        <p>Correo</p>
                        <p>Billetera</p>
                        <p>Rol</p>
                    </div>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 1000, role: 2}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 5000, role: 2}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 6000, role: 1}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 7000, role: 1}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 100, role: 2}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 23000, role: 2}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 3400, role: 1}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 65400, role: 2}}/>
                    <UserInfo user={{email: 'test@gmail.com', wallet: 0, role: 1}}/>

                </div>
            </div>
        </div>
    )
}

export default Users