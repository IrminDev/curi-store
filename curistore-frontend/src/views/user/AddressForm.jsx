import React, { useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FaMapPin, FaMapSigns, FaMapMarked, FaMap} from "react-icons/fa";
import addressService from '../../services/address';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
    const [address, setAddress] = useState({
        address: '',
        city: '',
        state: '',
        zip: '',
        user_id: ''
    })

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
    
        addressService.createAddress({
            ...address,
            user_id: user.id
        }, token).then(response => {
            toast.success('Dirección agregada con éxito');
            navigate('/user/profile');
        }).catch(error => {
            toast.error('Ocurrió un error al agregar la dirección');
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
                        <Input handleChange={handleChange} name={'address'} type={'text'} placeholder={'Direccion'} required={true}>
                            <FaMapPin/>
                        </Input>
                        <Input handleChange={handleChange} name={'city'} type={'text'} placeholder={'Ciudad'} required={true}>
                            <FaMapSigns/>
                        </Input>
                        <Input handleChange={handleChange} name={'state'} type={'text'} placeholder={'Estado'} required={true}>
                            <FaMapMarked/>
                        </Input>
                        <Input handleChange={handleChange} name={'zip'} type={'text'} placeholder={'Código postal'} required={true}>
                            <FaMap/>
                        </Input>
                        <Button text={'Agregar dirección'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressForm