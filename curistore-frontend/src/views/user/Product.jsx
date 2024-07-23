import React, {useState, useEffect} from 'react'
import productService from '../../services/product'
import {useParams} from 'react-router-dom'
import CarouselItems from '../../components/CarouselItems'
import cartService from '../../services/cart'
import { toast } from 'react-toastify'

const Product = () => {
    const [product, setProduct] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        thumbnail: '',
        thumbnails: [],
        stock: '',
        discount: '',
        category: '',
        brand: '',
        category_id: 0
    });
    const [quantity, setQuantity] = useState(1);

    const [currentImage, setCurrentImage] = useState(0);

    const {id} = useParams();

    useEffect(() => {
        productService.getProductById(id).then(response => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(err => {
            toast.error('Error al intentar obtener el producto.');
            console.log(err);
        });
    }, [id]);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % product.thumbnails.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [product.thumbnails]);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleOnClick = (id) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);

        cartService.addToCart(user.id, token, {
            product_id: id,
            quantity: quantity
        }).then(response => {
            toast.success('Producto agregado al carrito.');
            console.log(response);
        });
    }

    return (
        <div className=' mt-20 max-sm:mt-10'>
            <section className="text-gray-600 body-font overflow-hidden w-full">
                <div className="container px-5 py-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            {product.category?.name}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                            {product.title}
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex-grow text-teal-800 border-b-2 border-teal-600 py-2 text-lg px-1">
                            Descripción
                            </span>
                        </div>
            
                        <p className="leading-relaxed mb-4">
                            {product.description}
                        </p>
            
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">ID</span>
                            <span className="ml-auto text-gray-900">{product.id}</span>
                        </div>
            
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Descuento</span>
                            <span className="ml-auto text-gray-900">{product.discount}</span>
                        </div>
            
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Marca</span>
                            <span className="ml-auto text-gray-900">{product.brand?.name}</span>
                        </div>
            
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Stock</span>
                            <span className="ml-auto text-gray-900">{product.stock}</span>
                        </div>
            
                        { product.stock > 0 ?
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Cantidad</span>
                            <input
                            type="number"
                            min={product.stock > 10 ? 1 : product.stock}
                            max={product.stock > 10 ? 10 : product.stock}
                            onChange={handleChange}
                            defaultValue="1"
                            className="ml-auto text-gray-900 border border-gray-300 rounded-md w-20 text-center"
                            />
                        </div>
                        :
                        <div className=' border-t border-b mb-6 text-center'>
                            Producto agotado
                        </div>
                        }
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                            ${product.price}
                            </span>
                            <button
                            onClick={() => handleOnClick(product.id)}
                            disabled={product.stock > 0 ? false : true}
                            className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded">
                                Añadir al Carrito
                            </button>
                        </div>
                        </div>
                        <img
                        id="changing-image"
                        alt="ecommerce"
                        className="lg:w-1/2 w-full max-h-96 object-contain object-center rounded"
                        src={product.thumbnails[currentImage]?.url}
                        />
                    </div>
                </div>
            </section>

            <div className=' w-full mb-10'>
                <CarouselItems category={product.category?.id} />
            </div>
        </div>
    )
}

export default Product