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
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div className="px-4 pt-8">   
                <p className="text-xl font-medium">Order Summary</p>
                <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                <>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
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
                            <p className="text-sm font-medium text-gray-900">Shipping</p>
                            <p className="font-semibold text-gray-900">${shippingCost.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">${totalPay.toFixed(2)}</p>
                    </div>
                </div>
                <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
            </div>
            {showAddressForm ? (    
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <div className="">
                        <label for="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
                        <InputCheckout id={'address'} handleChange={handleChange} placeholder={'Address'} required={true} name={'address'}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </InputCheckout>

                        <label for="state" className="mt-4 mb-2 block text-sm font-medium">State</label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="address-state" name="address-state" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="State" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                </div>
                            </div>
                            <input type="text" name="address-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/4 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                        </div>
                        
                        <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                        <InputCheckout id={'city'} handleChange={handleChange} placeholder={'City'} required={true} name={'city'}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
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