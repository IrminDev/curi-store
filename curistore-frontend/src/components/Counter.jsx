// src/components/Counter.js
import React, { useState, useEffect } from 'react';

const Counter = ({ avaliableQuantity, onCountChange }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        onCountChange(count);
    }, [count, onCountChange]);

    const increment = () => {
        if (count < avaliableQuantity) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="md:p-6 flex flex-col items-center justify-center space-y-2 p-4">
            <div className="md:space-x-2 flex items-center justify-center mb-2 space-x-1">
                <button
                    className={`px-3 py-1 rounded-l focus:outline-none ${count <= 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                    onClick={decrement}
                    disabled={count <= 1}
                >
                    -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-200 text-center min-w-[2rem] md:min-w-[3rem]">{count}</span>
                <button
                    className={`px-3 py-1 rounded-r focus:outline-none ${count >= avaliableQuantity ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                    onClick={increment}
                    disabled={count >= avaliableQuantity}
                >
                    +
                </button>
            </div>
            <span className="text-sm text-gray-600 text-center">
                Cantidad disponible: {
                    (avaliableQuantity === 1)
                        ? <span className="text-red-500"><br />Última unidad</span>
                        : avaliableQuantity
                }
            </span>
        </div>
    );
};

export default Counter;
