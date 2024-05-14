import React from 'react'
import Header from '../components/Header'
import HeaderLink from '../components/HeaderLink'
import { FaHome } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Outlet } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div>
            <Header>
                <HeaderLink url={'/'} text={'Inicio'}><FaHome/></HeaderLink>
                <HeaderLink url={'/product-form'} text={'Productos'}><FaTags/></HeaderLink>
                <HeaderLink url={'/user-form'} text={'Usuarios'}><FaUsers/></HeaderLink>
                <HeaderLink url={'/profile'} text={'Perfil'}><FaUser/></HeaderLink>
            </Header>

            <Outlet />
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

            <Outlet />
        </div>
    )
}

export { AdminHome, UserHome }