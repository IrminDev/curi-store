import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Profile = () => {

    const handleClick = () => {

    };

    return (
        <div className=' h-screen w-full flex flex-col justify-evenly items-center bg-teal-100'>
            <h1 className=' text-4xl text-teal-800 border-b-2 border-teal-700 w-[80%] mb-10'>Perfil de usuario</h1>
            <div className=' bg-teal-50 rounded-xl flex flex-col w-[80%] px-10 py-10'>
                <div className=' text-lg text-teal-950 font-medium mb-5'>
                    <span className=' text-2xl font-bold'>Nombre:</span> Irmin Hernandez
                </div>
                <div className=' text-lg text-teal-950 font-medium mb-5'>
                    <span className=' text-2xl font-bold'>Correo:</span> irmindev@gmail.com
                </div>
                <div className=' text-lg text-teal-950 mb-10 font-medium'>
                    <span className=' text-2xl font-bold'>Rol:</span> Adminisitrador
                </div>

                <Button text={`Cerrar sesión`} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Profile