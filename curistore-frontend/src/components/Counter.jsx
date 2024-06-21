// src/components/Counter.js
import React, { useState, useEffect } from 'react';
import cartService from '../services/cart';

const Counter = ({ stock, onCountChange, id, quantity }) => {
    const [count, setCount] = useState(quantity);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        onCountChange(count);
    }, [count, onCountChange]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }

        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        setDisabled(true);
        cartService.updateCart(user.id, token, {
            product_id: id,
            quantity: count + 1
        }).then(response => {
            console.log(response);
            setDisabled(false);
        });
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }

        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        setDisabled(true);
        cartService.addToCart(user.id, token, {
            product_id: id,
            quantity: count + 1
        }).then(response => {
            console.log(response);
            setDisabled(false);
        });
    };

    return (
        <div className="md:p-6 flex flex-col items-center justify-center space-y-2 p-4">
            <div className="md:space-x-2 flex items-center justify-center mb-2 space-x-1">
                <button
                    className={`px-3 py-1 rounded-l focus:outline-none ${count <= 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                    onClick={decrement}
                    disabled={count <= 1 || disabled}
                >
                    -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-200 text-center min-w-[2rem] md:min-w-[3rem]">{count}</span>
                <button
                    className={`px-3 py-1 rounded-r focus:outline-none ${count >= stock ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                    onClick={increment}
                    disabled={count >= stock || disabled} 
                >
                    +
                </button>
            </div>
            <span className="text-sm text-gray-600 text-center">
                Cantidad disponible: {
                    (stock === 1)
                        ? <span className="text-red-500"><br />Última unidad</span>
                        : stock > 10 ? '10+' : stock
                }
            </span>
        </div>
    );
};

export default Counter;
