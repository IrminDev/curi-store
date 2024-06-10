import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import { MdEmail, MdLock } from "react-icons/md";
import loginService from '../services/auth'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            navigate('/user')
        }
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginService.login(user).then(response => {
            if(response.status === 200){
                localStorage.setItem('token', response.data.access_token);
                loginService.me(response.data.access_token).then(response => {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    if(response.data.role_id === 1){
                        navigate('/user');
                    } else {
                        navigate('/admin');
                    }
                })
            } else {
                console.log('Login failed');
                console.log(response);
            }
        }).catch(error => {
            console.log(error);
        })
    };
    
    
    return (
        <div className=' flex items-center justify-center bg-login bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[450px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form onSubmit={handleSubmit} className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-4xl text-white font-bold mb-5'>Inicio de sesión</h1>
                    <p className=' text-white text-lg mb-5 max-sm:text-sm'>¡Bienvenido a la curistore! Por favor, llena los campos con tus credenciales para iniciar sesión.</p>
                    <div className=' w-full flex flex-col items-center justify-evenly'>
                        <Input handleChange={handleChange} value={user.email} type={'email'} name={'email'} placeholder={'Correo electrónico'} required={true}>
                            <MdEmail/>
                        </Input>
                        <Input handleChange={handleChange} value={user.password} type={'password'} name={'password'} placeholder={'Contraseña'} required={true}>
                            <MdLock/>
                        </Input>
                        <Button text={'Iniciar sesión'}/>
                    </div>
                </form>
                <p className=' max-sm:text-sm mt-3 text-teal-50 text-lg text-center'>Si aún no tienes una cuenta <Link to={'../signup'} className=' text-teal-700 font-semibold'>Regístrate</Link> </p>
            </div>
        </div>
    )
}

export default Login