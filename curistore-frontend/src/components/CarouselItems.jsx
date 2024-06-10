import React, {useEffect, useState} from 'react'
import productService from '../services/product';
import { Link } from 'react-router-dom';
import cartService from '../services/cart';

const CarouselItems = ({category}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        productService.getProductsByCategory(category).then(response => {
            setItems(response.data);
        }).catch(err => {
            console.log(err);
        });
    }, [category])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleOnClick = (id) => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        console.log(user);

        cartService.addToCart(user.id, token, {
            product_id: id,
            quantity: 1
        }).then(response => {
            // console.log(response);
        });
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    return (
        <div className="w-full max-w-4xl mx-auto py-4">
            <div className="relative overflow-hidden">
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                {items.map((item, index) => (
                    <div key={index} className="min-w-full p-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                        src={item.thumbnail}
                        alt={`Producto ${index + 1}`}
                        className="w-full h-64 object-contain object-center"
                        />
                        <div className="p-4">
                        <Link to={`../product/${item.id}`}>
                            <h2 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h2>
                        </Link>
                        <p className="text-gray-600 mt-2 text-sm">
                            {item.description}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-gray-900 font-bold">
                            {item.price}
                            </span>
                            <button
                            onClick={() => handleOnClick(item.id)}
                            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-800 text-sm">
                                Agregar
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
                >
                ◀
                </button>
                <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
                >
                ▶
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                        currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselItems