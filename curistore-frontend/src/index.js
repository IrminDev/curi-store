import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {AdminHome, UserHome} from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Index from './views/user/Index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route index element={<App />} />
                <Route path="admin" element={<AdminHome />} >
                    <Route index element={<p>Inicio</p>} />
                    <Route path="product-form" element={<p>Productos</p>} />
                    <Route path="user-form" element={<p>Usuarios</p>} />
                    <Route path="profile" element={<p>Perfil</p>} />
                </Route>
                <Route path="/user" element={<UserHome />}>
                    <Route index element={<Index/>} />
                    <Route path="cart" element={<p>Carrito</p>} />
                    <Route path="orders" element={<p>Compras</p>} />
                    <Route path="profile" element={<p>Perfil</p>} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
