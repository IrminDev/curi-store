import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaTag, FaMoneyBill, FaBoxOpen, FaImage, FaImages, FaFilter, FaAmilia } from "react-icons/fa";
import { Link } from 'react-router-dom';
import TextArea from '../../components/TextArea';
import ComboInput from '../../components/ComboInput';

const ProductForm = () => {
    return (
        <div className=' pt-10 flex items-center justify-center bg-products bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[650px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-3xl text-white font-bold mb-5'>Agregar producto</h1>
                    <p className=' text-white text-lg mb-5 max-sm:text-sm'>Con este formulario podrás agregar un nuevo producto a la curistore. Para agregar más de una imagen debes hacerlo una por una.</p>
                    <div className=' w-full flex flex-col items-center justify-evenly'>
                        <Input name={'title'} type={'text'} placeholder={'Título'} required={true}>
                            <FaTag/>
                        </Input>
                        <div className=' h-48 w-full mb-3'>
                            <TextArea name={'description'} placeholder={'Descripción'} required={true}/>
                        </div>
                        <div className=' w-full grid grid-cols-2 gap-2 place-content-center'>
                            <Input name={'price'} type={'number'} placeholder={'Precio'} required={true}>
                                <FaMoneyBill/>
                            </Input>
                            <Input name={'stock'} type={'number'} placeholder={'Stock'} required={true}>
                                <FaBoxOpen/>
                            </Input>
                        </div>
                        <Input name={'thumbnail'} type={'text'} placeholder={'URL de la miniatura'} required={true}>
                            <FaImage/>
                        </Input>
                        <div className=' w-full grid grid-cols-2 gap-2 place-content-center py-2'>
                            <Input name={'images'} type={'text'} placeholder={'URL de las imagenes'} required={true}>
                                <FaImages/>
                            </Input>
                            <Button text={'Agregar'}/>
                        </div>
                        <div className=' w-full grid grid-cols-2 gap-2 place-content-center py-2'>
                            <ComboInput name={'category_id'} required
                                options={[
                                    {value: 1, text: 'Categoría 1'},
                                    {value: 2, text: 'Categoría 2'},
                                    {value: 3, text: 'Categoría 3'},
                                ]}
                                placeholder={'Categoría'}
                            >
                                <FaFilter/>
                            </ComboInput>
                            <ComboInput name={'brand_id'} required
                                options={[
                                    {value: 1, text: 'Marca 1'},
                                    {value: 2, text: 'Marca 2'},
                                    {value: 3, text: 'Marca 3'},
                                ]}
                                placeholder={'Marca'}
                            >
                                <FaAmilia/>
                            </ComboInput>
                        </div>

                        <Button text={'Subir producto'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm