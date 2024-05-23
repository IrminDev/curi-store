import React from 'react'

const ProductInfo = ({product}) => {
    const color = product.stock >= 100 ? 'bg-green-600' : product.stock >= 50 ? 'bg-yellow-600' : product.stock > 0 ? 'bg-red-600' : 'bg-gray-600';

    return (
        <div className=' py-3 w-full grid grid-cols-4 items-center justify-center place-items-center text-lg max-sm:text-sm'>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.id}</p>
            <div className={`${color} px-3 w-[70%] text-center py-1 text-teal-50 font-bold rounded-lg`}>
                {product.stock}
            </div>
        </div>
    )
}

export default ProductInfo