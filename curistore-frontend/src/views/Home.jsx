import React from 'react'
import Header from '../components/Header'
import HeaderLink from '../components/HeaderLink'
import { FaHome } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Routes, Route } from 'react-router-dom';
import Index from './user/Index';

const AdminHome = () => {
    return (
        <div>
            <Header>
                <HeaderLink url={'./'} text={'Inicio'}><FaHome/></HeaderLink>
                <HeaderLink url={'./product-form'} text={'Productos'}><FaTags/></HeaderLink>
                <HeaderLink url={'./user-form'} text={'Usuarios'}><FaUsers/></HeaderLink>
                <HeaderLink url={'./profile'} text={'Perfil'}><FaUser/></HeaderLink>
            </Header>

            <Routes>
                <Route index element={<p>Inicio</p>} />
                <Route path="product-form" element={<p>Productos</p>} />
                <Route path="user-form" element={<p>Usuarios</p>} />
                <Route path="profile" element={<p>Perfil</p>} />
            </Routes>
        </div>
    )
}

const UserHome = () => {
    return (
        <div>
            <Header>
                <HeaderLink url={'./'} text={'Inicio'}><FaHome/></HeaderLink>
                <HeaderLink url={'./cart'} text={'Carrito'}><FaShoppingCart/></HeaderLink>
                <HeaderLink url={'./orders'} text={'Compras'}><FaTags/></HeaderLink>
                <HeaderLink url={'./profile'} text={'Perfil'}><FaUser/></HeaderLink>
            </Header>

            <Routes>
                <Route index element={<Index/>} />
                <Route path="cart" element={<p>Carrito</p>} />
                <Route path="orders" element={<p>Compras</p>} />
                <Route path="profile" element={<p>Perfil</p>} />
            </Routes>
        </div>
    )
}

export { AdminHome, UserHome }