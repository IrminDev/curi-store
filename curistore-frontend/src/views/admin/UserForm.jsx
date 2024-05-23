import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MdPerson, MdEmail, MdLock } from "react-icons/md";


const UserForm = () => {
    return (
        <div className=' flex items-center justify-center bg-users bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[450px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-3xl text-white font-bold mb-5'>Agregar administrador</h1>
                    <p className=' text-white text-lg mb-5 max-sm:text-sm'>Con este formulario podrás agregar a un usuario del tipo administrador</p>
                    <div className=' w-full flex flex-col items-center justify-evenly'>
                        <Input name={'name'} type={'text'} placeholder={'Nombre'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input name={'last_name'} type={'text'} placeholder={'Apellido'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input name={'email'} type={'email'} placeholder={'Correo electrónico'} required={true}>
                            <MdEmail/>
                        </Input>
                        <Input name={'password'} type={'password'} placeholder={'Contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Input name={'confirm_password'} type={'password'} placeholder={'Confirmar contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Button text={'Agregar administrador'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm