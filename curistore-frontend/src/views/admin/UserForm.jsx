import React, { useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import userService from '../../services/user';

const UserForm = () => {
    const [user, setUser] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '' 
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password !== user.confirm_password) {
            alert('Las contraseñas no coinciden');
            return;
        }
        userService.createAdmin(localStorage.getItem('token'), user).then(response => {
            console.log(response.data);
            navigate('/admin/users');
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className=' flex items-center justify-center bg-users bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[450px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form onSubmit={handleSubmit} className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-3xl text-white font-bold mb-5'>Agregar administrador</h1>
                    <p className=' text-white text-lg mb-5 max-sm:text-sm'>Con este formulario podrás agregar a un usuario del tipo administrador</p>
                    <div className=' w-full flex flex-col items-center justify-evenly'>
                        <Input handleChange={handleChange} name={'name'} type={'text'} placeholder={'Nombre'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input handleChange={handleChange} name={'last_name'} type={'text'} placeholder={'Apellido'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input handleChange={handleChange} name={'email'} type={'email'} placeholder={'Correo electrónico'} required={true}>
                            <MdEmail/>
                        </Input>
                        <Input handleChange={handleChange} name={'password'} type={'password'} placeholder={'Contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Input handleChange={handleChange} name={'confirm_password'} type={'password'} placeholder={'Confirmar contraseña'} required={true}>
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