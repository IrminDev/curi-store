import React, {useState, useEffect} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';

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
                    if(response.data.role_id === 2){
                        navigate('/admin');
                    } else {
                        navigate('/user');
                    }
                } else {
                    localStorage.removeItem('token');
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password !== user.confirm_password){
            console.log('Passwords do not match');
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
            })
        } catch (error) {
            console.log(error);
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