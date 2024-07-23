import React, {useState, useEffect} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import { toast } from 'react-toastify';
import validator from 'validator';

const SignUp = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            authService.me(token).then(response => {
                if(response.status === 200){
                    navigate('/user');
                } else {
                    localStorage.removeItem('token');
                }
            }).catch(error => {
                toast.error('Error al intentar iniciar sesión.');
                console.log(error);
            })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password !== user.confirm_password){
            console.log('Passwords do not match');
            toast.error('Las contraseñas no coinciden.');
            return;
        }

        if(!validator.isEmail(user.email)){
            console.log('Invalid email');
            toast.error('Correo electrónico inválido.');
            return;
        }

        if(user.password.length < 8){
            console.log('Password too short');
            toast.error('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if(user.password.length > 20){
            console.log('Password too long');
            toast.error('La contraseña debe tener máximo 20 caracteres.');
            return;
        }

        if((!validator.isAlpha(user.name, ['es-ES']) || !validator.isAlpha(user.last_name, ['es-ES'])) && user.name.length > 3 && user.last_name.length > 2){
            console.log('Invalid name or last name');
            toast.error('Nombre y apellido deben contener solo letras.');
            return;
        }

        try {
            authService.register(user).then(response => {
                if(response.status === 200){
                    localStorage.setItem('token', response.data.access_token);
                    navigate('/user');
                } else {
                    console.log('Register failed');
                    console.log(response);
                }
            }).catch(error => {
                console.log(error);
                toast.error('Error al intentar registrarse.');
            })
        } catch (error) {
            console.log(error);
            toast.error('Error al intentar registrarse.');
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className=' flex items-center justify-center bg-signup bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[450px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form onSubmit={handleSubmit} className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-5xl text-white font-bold mb-5'>Registro</h1>
                    <p className=' max-sm:text-sm text-white text-lg mb-5'>¡Bienvenido a la curistore! Por favor, llena los campos para registrarte.</p>
                    <div className=' max-sm:text-sm w-full flex flex-col items-center justify-evenly'>
                        <Input name={'name'} handleChange={handleChange} type={'text'} placeholder={'Nombre'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input name={'last_name'} handleChange={handleChange} type={'text'} placeholder={'Apellido'} required={true}>
                            <MdPerson/>
                        </Input>
                        <Input name={'email'} handleChange={handleChange} type={'email'} placeholder={'Correo electrónico'} required={true}>
                            <MdEmail/>
                        </Input>
                        <Input name={'password'} handleChange={handleChange} type={'password'} placeholder={'Contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Input name={'confirm_password'} handleChange={handleChange} type={'password'} placeholder={'Confirmar contraseña'} required={true}>
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