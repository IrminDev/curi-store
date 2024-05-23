import React from 'react'
import CountCard from '../../components/CountCard'
import { FaTags, FaBox } from "react-icons/fa";
import ProductInfo from '../../components/ProductInfo';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className=' flex flex-col justify-center items-center mt-20 bg-teal-100'>
            <div className=' h-auto flex flex-row flex-wrap items-center justify-evenly w-full mt-5 mb-5'>
                <CountCard number={0} label={'Productos'} background={'bg-teal-800'}>
                    <FaBox/>
                </CountCard>
                <CountCard number={0} label={'Ventas'} background={'bg-teal-700'}>
                    <FaTags/>
                </CountCard>
                <div>
                    <Link className=' w-[50%] py-3 px-4 rounded-xl bg-teal-600 text-2xl text-teal-50 font-semibold' to={'../product-form'}>Crear producto</Link>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20 w-[90%]'>
                <div className=' w-full border-b-4 border-teal-800 pb-2 mb-4'>
                    <h2 className=' text-4xl font-bold text-teal-800'>Productos</h2>
                </div>
                <div className=' flex flex-col items-center justify-evenly w-[90%] max-sm:w-full rounded-2xl bg-teal-50 '>
                    <div className=' py-2 w-full grid grid-cols-4 text-center max-sm:text-base text-xl font-bold border-b-2 border-teal-400'>
                        <p>Nombre</p>
                        <p>Precio</p>
                        <p>ID</p>
                        <p>Stock</p>
                    </div>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 100}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 100}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 60}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 50}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 67}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 2}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 0}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 1}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 342}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 10}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 34}}/>
                    <ProductInfo product={{title: 'Producto 1', price: 100, id: 10, stock: 10}}/>
                </div>
            </div>
        </div>
    )
}

export default Products