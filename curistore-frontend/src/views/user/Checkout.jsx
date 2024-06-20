import React, {useState} from 'react'
import ProductCheckout from '../../components/ProductCheckout';
import InputCheckout from '../../components/InputCheckout';
import AddressList from '../../components/AddressList'; 

const Checkout = () => {
    //const [products, setProducts] = useState([]);
    const shippingCost = 8;
    const initialProducts = [
        {
            id: 12,
            title: "Brown Perfume",
            price: 40,
            quantity: 2,
            thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            quantity: 1,
            thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        },
        {
            id: 28,
            title: "3D Embellishment Art Lamp",
            price: 20,
            quantity: 3,
            thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
        },
        {
            id: 26,
            title: "Plant Hanger For Home",
            price: 41,
            quantity: 2,
            thumbnail: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
        }
    ]
    

    const productsChkt = initialProducts.map(product => ({
        ...product,
        totalPrice: product.price * product.quantity
    }));

    const subTotal = productsChkt.reduce((sum, product) => sum + product.totalPrice, 0);
    const totalPay = subTotal + shippingCost;


    const [address, setAddress] = useState({
        user_id: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    };

    const [showAddressForm, setShowAddressForm] = useState(false);
    const handleAddAddressClick = () => {
        setShowAddressForm(true);
    };

    return(
        <div className="grid mt-24 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pb-16 md:pb-0">
            <div className="px-4 pt-8">   
                <p className="text-xl font-medium">Resumen del pedido</p>
                <p className="text-gray-400">Revisa tus productos seleccionados. Y selecciona una dirección de envío.</p>
                <>
                    <div className="mt-8 space-y-3 max-h-64 rounded-lg overflow-y-auto no-scrollbar border bg-white px-2 py-4 sm:px-6">
                    {productsChkt.map(product => (
                        <ProductCheckout
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                            totalPrice={product.totalPrice}
                            thumbnail={product.thumbnail}
                        />
                        ))}
                    </div>
                </>

                <div className="">  
                    <div className="mt-6 border-t border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                            <p className="font-semibold text-gray-900">${subTotal.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Costo de envío</p>
                            <p className="font-semibold text-gray-900">${shippingCost.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">${totalPay.toFixed(2)}</p>
                    </div>
                </div>
                <button className="mt-4 mb-8 w-full rounded-md bg-teal-950 px-6 py-3 font-semibold text-xl text-white">Confirmar Compra</button>
            </div>
            {showAddressForm ? (    
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 md:pb-12 sm:pb-8 xs:pb-10">
                    <p className="text-xl font-medium">Agregar una dirección</p>
                    <p className="text-gray-400">Completa tu pedido agregando los datos de la dirección de envío.</p>
                    <div className="">
                        <label for="address" className="mt-4 mb-2 block text-sm font-medium">Dirección (calle, número y colonia)</label>
                        <InputCheckout id={'address'} handleChange={handleChange} placeholder={'Dirección'} required={true} name={'address'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" stroke-width="2">    
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0M12.532 5l1.666 2-1.666 2H2V5z" />
                            </svg>
                        </InputCheckout>

                        <label for="state" className="mt-4 mb-2 block text-sm font-medium">Estado</label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="address-state" name="address-state" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-lg shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Estado" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/7e0d264b186e6799ce8cc7b4d3f4a041.svg" alt="" />
                                </div>
                            </div>
                            <input type="text" name="address-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-lg shadow-sm outline-none sm:w-1/4 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="C.P." />
                        </div>
                        
                        <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Alcaldía o municipio</label>
                        <InputCheckout id={'city'} handleChange={handleChange} placeholder={'Alcaldía o municipio'} required={true} name={'city'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="currentColor" viewBox="0 0 16 16" stroke-width="2">    
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                            </svg>
                        </InputCheckout>
                    </div>     
                </div>
            ) : (
                <AddressList onAddAddressClick={handleAddAddressClick} />
            )}
        </div>
    );
};

export default Checkout;