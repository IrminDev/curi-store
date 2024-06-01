import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {AdminHome, UserHome} from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './views/user/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route index element={<App />} />
                <Route path="admin/*" element={<AdminHome />} />
                <Route path="user/*" element={<UserHome />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="cart" element={<Cart/>} />
            </Routes>
        </Router>
    </React.StrictMode>
);
