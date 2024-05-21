import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className=' flex items-center justify-center bg-signup bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[450px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form action="" className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-5xl text-white font-bold mb-5'>Registro</h1>
                    <p className=' max-sm:text-sm text-white text-lg mb-5'>¡Bienvenido a la curistore! Por favor, llena los campos para registrarte.</p>
                    <div className=' max-sm:text-sm w-full flex flex-col items-center justify-evenly'>
                        <Input type={'text'} placeholder={'Nombre'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input type={'text'} placeholder={'Apellido'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input type={'email'} placeholder={'Correo electrónico'} required={true}>
                            <MdEmail/>
                        </Input>
                        <Input type={'password'} placeholder={'Contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Input type={'password'} placeholder={'Confirmar contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Button text={'Registrarse'}/>
                    </div>
                </form>
                <p className=' mt-3 max-sm:text-sm text-teal-50 text-lg text-center'>¿Ya tienes una cuenta? <Link to={'../login'} className=' text-teal-700 font-semibold'>Inicia sesión</Link> </p>
            </div>
        </div>
    )
}

export default SignUp