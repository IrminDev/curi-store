import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaTag, FaMoneyBill, FaBoxOpen, FaImage, FaImages, FaFilter, FaAmilia } from "react-icons/fa";
import TextArea from '../../components/TextArea';
import ComboInput from '../../components/ComboInput';
import { useNavigate } from 'react-router-dom';
import productService from '../../services/product';
import brandService from '../../services/brand';
import categoryService from '../../services/category';
import { toast } from 'react-toastify';
import validator from 'validator';

const ProductForm = () => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState('');
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: 0,
        stock: 0,
        thumbnail: '',
        images: [],
        category_id: 0,
        brand_id: 0,
        rating: 0,
        discount: 0
    });
    const navigate = useNavigate();
    
    useEffect(() => {
        brandService.getAll().then(response => {
            setBrands(response.data.map(brand => {
                return {
                    value: brand.id,
                    text: brand.name
                }
            }));
        }).catch(error => {
            console.log(error);
        });

        categoryService.getAll().then(response => {
            setCategories(response.data.map(category => {
                return {
                    value: category.id,
                    text: category.name
                }
            }));
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!validator.isURL(product.thumbnail)){
            console.log('Invalid thumbnail');
            toast.error('URL de la miniatura inválida.');
            return;
        }

        if(product.images.length === 0){
            console.log('No images');
            toast.error('Debes agregar al menos una imagen.');
            return;
        }

        if(product.category_id === 0){
            console.log('No category');
            toast.error('Debes seleccionar una categoría.');
            return;
        }

        if(product.brand_id === 0){
            console.log('No brand');
            toast.error('Debes seleccionar una marca.');
            return;
        }

        if(product.price <= 0){
            console.log('Invalid price');
            toast.error('Precio inválido.');
            return;
        }

        if(product.stock <= 0){
            console.log('Invalid stock');
            toast.error('Stock inválido.');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await productService.create(product, token);
            console.log(response);
            navigate('/admin/products');
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    const handleAddImageChange = (event) => {
        event.preventDefault();
        setImage(event.target.value);
    }

    const handleAddImage = (event) => {
        event.preventDefault();

        if(!validator.isURL(image)){
            console.log('Invalid image');
            toast.error('URL de la imagen inválida.');
            return;
        }

        setProduct({
            ...product,
            images: [...product.images, image]
        });
        setImage('');
    }

    return (
        <div className=' pt-10 flex items-center justify-center bg-products bg-no-repeat bg-cover bg-center h-screen w-screen'>
            <div className=' h-auto px-10 py-12 w-[650px] border-solid border-2 rounded-lg border-teal-800 bg-transparent backdrop-blur-md mx-3'>
                <form onSubmit={handleSubmit} className=' w-full text-center'>
                    <h1 className=' max-sm:text-2xl text-3xl text-white font-bold mb-5'>Agregar producto</h1>
                    <p className=' text-white text-lg mb-5 max-sm:text-sm'>Con este formulario podrás agregar un nuevo producto a la curistore. Para agregar más de una imagen debes hacerlo una por una.</p>
                    <div className=' w-full flex flex-col items-center justify-evenly'>
                        <Input handleChange={handleChange} name={'title'} type={'text'} placeholder={'Título'} required={true}>
                            <FaTag/>
                        </Input>
                        <div className=' h-48 w-full mb-3'>
                            <TextArea handleChange={handleChange} name={'description'} placeholder={'Descripción'} required={true}/>
                        </div>
                        <div className=' w-full grid grid-cols-2 gap-2 place-content-center'>
                            <Input handleChange={handleChange} name={'price'} type={'number'} placeholder={'Precio'} required={true}>
                                <FaMoneyBill/>
                            </Input>
                            <Input handleChange={handleChange} name={'stock'} type={'number'} placeholder={'Stock'} required={true}>
                                <FaBoxOpen/>
                            </Input>
                        </div>
                        <Input handleChange={handleChange} name={'thumbnail'} type={'text'} placeholder={'URL de la miniatura'} required={true}>
                            <FaImage/>
                        </Input>
                        <div className=' w-full grid grid-cols-2 gap-2 place-content-center py-2'>
                            <Input value={image} handleChange={handleAddImageChange} name={'image'} type={'text'} placeholder={'URL de las imagenes'}>
                                <FaImages/>
                            </Input>
                            <Button handleClick={handleAddImage} text={'Agregar'}/>
                        </div>
                        <div className=' w-full grid grid-cols-2 gap-2 place-content-center py-2'>
                            <ComboInput handleChange={handleChange} name={'category_id'} required
                                options={categories}
                                placeholder={'Categoría'}
                            >
                                <FaFilter/>
                            </ComboInput>
                            <ComboInput handleChange={handleChange} name={'brand_id'} required
                                options={brands}
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