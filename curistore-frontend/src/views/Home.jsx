import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeaderLink from '../components/HeaderLink'
import { FaHome } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Index from './user/Index';
import authService from '../services/auth';
import Stats from './admin/Stats';
import Products from './admin/Products';
import Users from './admin/Users';
import ProductForm from './admin/ProductForm';
import UserForm from './admin/UserForm';
import Profile from './admin/Profile';

const AdminHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login'); 
        }
        
        authService.me(token).then(response => {
            if(response.data.role_id === 1){
                navigate('/user');
            }
        }).catch(error => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login');
        })
    }, [])

    return (
        <div>
            <Header>
                <HeaderLink url={'./'} text={'Inicio'}><FaHome/></HeaderLink>
                <HeaderLink url={'./products'} text={'Productos'}><FaTags/></HeaderLink>
                <HeaderLink url={'./users'} text={'Usuarios'}><FaUsers/></HeaderLink>
                <HeaderLink url={'./profile'} text={'Perfil'}><FaUser/></HeaderLink>
            </Header>

            <Routes>
                <Route index element={<Stats />} />
                <Route path="products" element={<Products />} />
                <Route path="product-form" element={<ProductForm />} />
                <Route path="users" element={<Users />} />
                <Route path="user-form" element={<UserForm />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </div>
    )
}

const UserHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login'); 
        }
        
        authService.me(token).then(response => {
            if(response.data.role_id === 2){
                navigate('/admin');
            }
        }).catch(error => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login');
        })
    }, [])

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