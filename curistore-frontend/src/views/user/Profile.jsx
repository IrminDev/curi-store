import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth'
import Button from '../../components/Button'
import { toast } from 'react-toastify'

const Profile = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        authService.me(token).then(response => {
            setUser(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, [])
    

    const handleClick = () => {
        const token = localStorage.getItem('token');
        authService.logout(token).then(response => {
            localStorage.removeItem('token');
            toast.info('Sesión cerrada correctamente');
            navigate('/login');
        }).catch(error => {
            toast.error('Ocurrió un error al cerrar sesión');
            console.log(error);
        });
    };

    return (
        <div className=' h-screen w-full flex flex-col justify-evenly items-center bg-teal-100'>
            <h1 className=' text-4xl text-teal-800 border-b-2 border-teal-700 w-[80%] mb-10'>Perfil de usuario</h1>
            <div className=' bg-teal-50 rounded-xl flex flex-col w-[80%] px-10 py-10'>
                <div className=' text-lg text-teal-950 font-medium mb-5'>
                    <span className=' text-2xl font-bold'>Nombre:</span> {`${user.name} ${user.last_name}`}
                </div>
                <div className=' text-ellipsis overflow-hidden whitespace-nowrap text-lg text-teal-950 font-medium mb-5'>
                    <span className=' text-2xl font-bold'>Correo:</span> {user.email}
                </div>
                <div className=' text-lg text-teal-950 mb-5 font-medium'>
                    <span className=' text-2xl font-bold'>Rol:</span> {user.role_id === 2 ? 'Administrador' : 'Usuario'}
                </div>
                <div className=' text-lg text-teal-950 mb-10 font-medium'>
                    <span className=' text-2xl font-bold'>Saldo disponible:</span> {user.wallet?.balance}
                </div>

                <div className=' w-full mb-10'>
                    <Button text={`Agregar dirección`} handleClick={() => navigate('/user/profile/addressForm')} />
                </div>
                <Button text={`Cerrar sesión`} handleClick={handleClick} />

            </div>
        </div>
    )
}

export default Profile