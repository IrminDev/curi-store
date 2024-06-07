import React, {useState, useEffect} from 'react'
import productService from '../../services/product'
import {useParams} from 'react-router-dom'
import CarouselItems from '../../components/CarouselItems'

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
    const [currentImage, setCurrentImage] = useState(0);

    const {id} = useParams();

    useEffect(() => {
        productService.getProductById(id).then(response => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
    }, [id]);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % product.thumbnails.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [product.thumbnails]);


    return (
        <div className=' mt-20'>
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
                            <a className="flex-grow text-teal-800 border-b-2 border-teal-600 py-2 text-lg px-1">
                            Descripción
                            </a>
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
            
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Cantidad</span>
                            <input
                            type="number"
                            min="1"
                            max="10"
                            defaultValue="1"
                            className="ml-auto text-gray-900 border border-gray-300 rounded-md w-20 text-center"
                            />
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                            ${product.price}
                            </span>
                            <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded">
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

            <div className=' w-full'>
                <CarouselItems category={product.category?.id} />
            </div>
        </div>
    )
}

export default Product