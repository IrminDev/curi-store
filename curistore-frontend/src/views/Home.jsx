import React, { useEffect } from 'react'
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
import Cart from './user/Cart';
import Product from './user/Product';
import { toast } from 'react-toastify';
import ProfileUser from './user/Profile';
import AddressForm from './user/AddressForm';
import Invoice from './user/Invoice';
import Checkout from './user/Checkout';
import ShoppingHistory from './user/ShoppingHistory';

const AdminHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login'); 
        }
        
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            if(user.role_id === 1){
                navigate('/user');
            }
            authService.me(token).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
            }).catch(error => {
                toast.error('Sesión expirada. Por favor inicie sesión nuevamente.');
                console.log(error);
                localStorage.removeItem('token');
                navigate('/login');
            })
        } else {
            authService.me(token).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
                if(response.data.role_id === 1){
                    navigate('/user');
                }
            }).catch(error => {
                toast.error('Sesión expirada. Por favor inicie sesión nuevamente.');
                console.log(error);
                localStorage.removeItem('token');
                navigate('/login');
            })
        }
    }, [])

    return (
        <div className=' overflow-x-hidden no-scrollbar'>
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
        
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            if(user.role_id === 2){
                navigate('/admin');
            }
            authService.me(token).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
            }).catch(error => {
                toast.error('Sesión expirada. Por favor inicie sesión nuevamente.');
                console.log(error);
                localStorage.removeItem('token');
                navigate('/login');
            })
        } else {
            authService.me(token).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
                if(response.data.role_id === 2){
                    navigate('/admin');
                }
            }).catch(error => {
                toast.error('Sesión expirada. Por favor inicie sesión nuevamente.');
                console.log(error);
                localStorage.removeItem('token');
                navigate('/login');
            })
        }
    }, [])

    return (
        <div className=' overflow-x-hidden no-scrollbar'>
            <Header>
                <HeaderLink url={'./'} text={'Inicio'}><FaHome/></HeaderLink>
                <HeaderLink url={'./cart'} text={'Carrito'}><FaShoppingCart/></HeaderLink>
                <HeaderLink url={'./orders'} text={'Compras'}><FaTags/></HeaderLink>
                <HeaderLink url={'./profile'} text={'Perfil'}><FaUser/></HeaderLink>
            </Header>

            <Routes>
                <Route index element={<Index/>} />
                <Route path="product/:id" element={<Product/>} />
                <Route path="cart" element={<Cart />} />
                <Route path="profile" element={<ProfileUser />} />
                <Route path="profile/addressForm" element={<AddressForm />} />
                <Route path="orders/invoice/:id" element={<Invoice />} />
                <Route path="checkout/:product?" element={<Checkout />} />
                <Route path="orders" element={<ShoppingHistory />} />
            </Routes>
        </div>
    )
}

export { AdminHome, UserHome }