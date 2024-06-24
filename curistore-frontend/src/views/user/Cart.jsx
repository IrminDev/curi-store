// src/pages/Cart.js
import React, { useState, useEffect, useRef } from 'react';
import SummaryCard from '../../components/SummaryCard';
import ProductCard from '../../components/ProductCard';
import EmptyCart from '../../components/EmptyCart';
import cartService from '../../services/cart';
import { toast } from 'react-toastify';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const summaryRef = useRef(null);
    const divisionRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        cartService.getCart(user.id, token).then(response => {
            setProducts([]);
            response.data.forEach(item => {
                const product = {
                    id: item.product.id,
                    title: item.product.title,
                    price: item.product.price,
                    stock: item.product.stock,
                    quantity: item.quantity,
                    thumbnail: item.product.thumbnail,
                };
                setProducts(prevProducts => [...prevProducts, product]);
            });
        }).catch(error => {
            toast.error('Error al intentar obtener el carrito.');
            console.error(error);
        });

    }, [])

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));

        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        cartService.removeFromCart(user.id, token, { product_id: id }).then(response => {
            toast.info('Producto eliminado del carrito.');
            console.log(response);
        }).catch(error => {
            toast.error('Error al intentar eliminar el producto del carrito.');
            console.error(error);
        });
    };

    const onChangeQuantity = (id, quantity) => {
        setProducts(products.map(product => {
            if (product.id === id) {
                product.quantity = quantity;
            }
            return product;
        }));
    }

    return (
        <div className="pt-16 md:pt-20 max-md:mb-16 flex flex-col md:flex-row justify-center w-full space-y-4 md:space-y-0 h-full">
            {products.length > 0 ? (
                <>
                    <div className="md:w-4/5 flex flex-coljustify-between flex-wrap w-full space-y-4">
                        {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                            stock={product.stock}
                            thumbnail={product.thumbnail}
                            onRemove={removeProduct}
                            onChangeQuantity={onChangeQuantity}
                        />
                        ))}
                    <div className='max-md:w-full space-y-4' ref={divisionRef}></div>
                    </div>
                    <div className="md:w-1/5 md:top-28 max-md:block max-md:static md:sticky md:self-start w-full fixed bottom-16" ref={summaryRef}>
                        <SummaryCard quantity={
                            products.reduce((acc, product) => acc + product.quantity, 0)
                        } price={products.reduce((acc, product) => acc + product.price * product.quantity, 0)} />
                    </div>
                </>
            ) : (
                <EmptyCart discoverProductsUrl="../"/>
            )}
        </div>
    );
};

export default Cart;
