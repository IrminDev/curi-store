import React, {useState, useEffect} from 'react'
import ProductCheckout from '../../components/ProductCheckout';
import InputCheckout from '../../components/InputCheckout';
import AddressList from '../../components/AddressList';
import { useParams } from 'react-router-dom';
import productService from '../../services/product';
import cartService from '../../services/cart';
import purchaseService from '../../services/purchase';
import addressService from '../../services/address';
import { useNavigate } from 'react-router-dom';
import { FaMapPin, FaMapSigns, FaMapMarked, FaMap} from "react-icons/fa";
import { toast } from 'react-toastify';
import validator from 'validator';

const Checkout = () => {
    const { product } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate();

    const [address, setAddress] = useState({
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleAddressChange = (e) => {
        console.log(e.target.value);
        setSelectedAddress(e.target.value);
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        const data = {
            user_id: user.id,
            products: products.map(prod => ({
                product_id: prod.id,
                quantity: prod.quantity
            }))
        }

        if(showAddressForm){
            if(!validator.isPostalCode(address.zip, 'any')){
                toast.error('Código postal inválido');
                return;
            }
    
            if(address.address.length < 5){
                toast.error('Dirección inválida');
                return;
            }
    
            if(address.city.length < 3){
                toast.error('Ciudad inválida');
                return;
            }
    
            if(address.state.length < 3){
                toast.error('Estado inválido');
                return;
            }
            data.address = {
                address: validator.escape(address.address),
                city: validator.escape(address.city),
                state: validator.escape(address.state),
                zip: validator.escape(address.zip)
            };
            purchaseService.storePurchaseNoAddress(data, token).then(response => {
                console.log(response.data);
                toast.success('Compra realizada con éxito');
                if(!product){
                    cartService.deleteUserCart(user.id, token).then(response => {
                        console.log(response.data);
                    }).catch(error => {
                        console.log(error);
                    });
                }
                navigate('/user/orders');
            }).catch(error => {
                toast.error('Ocurrió un error al realizar la compra');
                console.log(error);
            });
        } else {
            data.address_id = selectedAddress;
            purchaseService.storePurchase(data, token).then(response => {
                console.log(response.data);
                toast.success('Compra realizada con éxito');
                if(!product){
                    cartService.deleteUserCart(user.id, token).then(response => {
                        console.log(response.data);
                    }).catch(error => {
                        console.log(error);
                    });
                }
                navigate('/user/orders');
            }).catch(error => {
                toast.error('Ocurrió un error al realizar la compra');
                console.log(error);
            });
        }

        console.log(data);
    }

    // Get the products in the cart
    useEffect(() => {
        if(product){
            productService.getProductById(product).then(response => {
                setProducts([{
                    id: response.data.id,
                    title: response.data.title,
                    price: response.data.price,
                    quantity: 1,
                    thumbnail: response.data.thumbnail
                }]);
            }).catch(error => {
                console.log(error);
            });
        } else {
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            
            cartService.getCart(user.id, token).then(response => {
                setProducts([]);
                response.data.map(prod => {
                    setProducts(prevProducts => [...prevProducts, {
                        id: prod.product_id,
                        title: prod.product.title,
                        price: prod.product.price,
                        quantity: prod.quantity,
                        thumbnail: prod.product.thumbnail
                    }]);
                })
            }).catch(error => {
                console.log(error);
            });
        }
    }, [])

    // Get the user addresses
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        addressService.getAddresses(user.id, token).then(response => {
            setAddresses(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return(
        <div className="grid mt-24 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pb-16 md:pb-0 max-sm:mt-10">
            <div className="px-4 pt-8">   
                <p className="text-xl font-medium">Resumen del pedido</p>
                <p className="text-gray-400">Revisa tus productos seleccionados. Y selecciona una dirección de envío.</p>
                <>
                    <div className="mt-8 space-y-3 max-h-64 rounded-lg overflow-y-auto no-scrollbar border bg-white px-2 py-4 sm:px-6">
                    { products.length > 0 ?
                    products.map(prod => (
                        <ProductCheckout
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            price={prod.price}
                            quantity={prod.quantity}
                            totalPrice={prod.quantity * prod.price}
                            thumbnail={prod.thumbnail}
                        />
                    )) : (
                        <p className="text-center text-gray-400">No hay productos en tu carrito</p>
                    )
                    }
                    </div>
                </>

                <div className="">  
                    <div className="mt-6 border-t border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                            <p className="font-semibold text-gray-900">${products.reduce((sum, prod) => sum + prod.price * prod.quantity, 0).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Costo de envío</p>
                            <p className="font-semibold text-gray-900">${0}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">${products.reduce((sum, prod) => sum + prod.price * prod.quantity, 0).toFixed(2)}</p>
                    </div>
                </div>
                <button disabled={
                    products.length === 0 || (showAddressForm && (address.address === '' || address.city === '' || address.state === '' || address.zip === '')) || (!showAddressForm && selectedAddress === 0)
                }
                className="mt-4 mb-8 w-full rounded-md bg-teal-800 px-6 py-3 font-semibold text-xl text-white"
                onClick={handleSubmit}>Confirmar Compra</button>
            </div>
            {showAddressForm ? (    
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 md:pb-12 sm:pb-8 xs:pb-10">
                    <p className="text-xl font-medium">Agregar una dirección</p>
                    <p className="text-gray-400">Completa tu pedido agregando los datos de la dirección de envío.</p>
                    <div className="flex flex-col justify-start items-start">
                        <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Dirección (calle, número y colonia)</label>
                        <InputCheckout id={'address'} handleChange={handleChange} placeholder={'Dirección'} required={true} name={'address'}>
                           <FaMapPin />
                        </InputCheckout>

                        <label htmlFor='state' className="mt-4 mb-2 block text-sm font-medium">Estado y código postal</label>
                        <div className="flex max-sm:flex-col flex-row w-full">
                            <InputCheckout id={'state'} handleChange={handleChange} placeholder={'Estado'} required={true} name={'state'}>
                                <FaMapMarked />
                            </InputCheckout>
                            <InputCheckout id={'zip'} handleChange={handleChange} placeholder={'Código postal'} required={true} name={'zip'}>
                                <FaMap />
                            </InputCheckout>
                        </div>
                        
                        <label htmlFor="city" className="mt-4 mb-2 block text-sm font-medium">Alcaldía o municipio</label>
                        <InputCheckout id={'city'} handleChange={handleChange} placeholder={'Alcaldía o municipio'} required={true} name={'city'}>
                            <FaMapSigns />
                        </InputCheckout>
                    </div>     
                </div>
            ) : (
                <AddressList onAddAddressClick={handleAddAddressClick} handleChange={handleAddressChange} addresses={addresses} selectedAddress={selectedAddress} />
            )}
        </div>
    );
};

export default Checkout;