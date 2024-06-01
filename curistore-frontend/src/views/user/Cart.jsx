// src/pages/Cart.js
import React, { useState, useEffect, useRef } from 'react';
import SummaryCard from '../../components/SummaryCard';
import ProductCard from '../../components/ProductCard';
import Header from "../../components/Header";
import HeaderLink from "../../components/HeaderLink";
import { FaHome, FaTags, FaUser, FaShoppingCart } from "react-icons/fa";
import EmptyCart from '../../components/EmptyCart';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, description: "Xtreme Pc Gamer Geforce Rtx 3060 Core i7 16GB SSD", price: 1500, avaliableQuantity: 1, imageDescription: "PC Gamer", shipment: 50 },
    { id: 1, description: "Xtreme Pc Gamer Geforce Rtx 3060 Core i7 16GB SSD", price: 1500, avaliableQuantity: 10, imageDescription: "PC Gamer", shipment: null }
  ]);
  const summaryRef = useRef(null);
  const divisionRef = useRef(null);

  useEffect(() => {
    if (summaryRef.current && divisionRef.current && products.length > 0) {
      divisionRef.current.style.height = `${summaryRef.current.offsetHeight + 30}px`;
    }
  }, [products]);

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header>
          <HeaderLink url={'./'} text={'Inicio'}><FaHome /></HeaderLink>
          <HeaderLink url={'./cart'} text={'Carrito'}><FaShoppingCart /></HeaderLink>
          <HeaderLink url={'./orders'} text={'Compras'}><FaTags /></HeaderLink>
          <HeaderLink url={'./profile'} text={'Perfil'}><FaUser /></HeaderLink>
        </Header>
      </div>
      <div className="pt-16 md:pt-20 flex flex-col md:flex-row justify-center w-full space-y-4 md:space-y-0 h-full">
        {products.length > 0 ? (
          <>
            <div className="md:w-4/5 flex flex-col justify-between flex-wrap w-full space-y-4">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  shipment={product.shipment}
                  description={product.description}
                  price={product.price}
                  avaliableQuantity={product.avaliableQuantity}
                  imageDescription={product.imageDescription}
                  onRemove={removeProduct}
                />
              ))}
              <div className='max-md:w-full space-y-4' ref={divisionRef}></div>
            </div>
            <div className="md:w-1/5 md:top-28 md:sticky md:self-start w-full fixed bottom-16" ref={summaryRef}>
              <SummaryCard quantity={products.length} price={products.reduce((total, product) => total + product.price, 0)} />
            </div>
          </>
        ) : (
          <EmptyCart discoverProductsUrl="./index"/>
        )}
      </div>
    </>
  );
};

export default Cart;
