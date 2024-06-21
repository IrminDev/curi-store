import React, {useState, useEffect} from 'react';
import ShoppingHistoryHeader from '../../components/ShoppingHistoryHeader';
import ProductCardStatic from '../../components/ProductCardStatic';
import DateID from '../../components/DateID';
import ShoppingHistoryFooter from '../../components/ShoppingHistoryFooter';
import purchaseService from '../../services/purchase';
import { format } from 'date-fns';

const ShoppingHistory = () => {
    const [purchases, setPurchases] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        purchaseService.getPurchases(user.id, token).then(response => {
            setPurchases(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

    return (
        <div className=' w-full flex flex-col items-center space-y-4 pb-24 md:pb-0'>
            <ShoppingHistoryHeader quantityShopping={purchases.length} totalPrice={
                purchases.reduce((acc, purchase) => acc + purchase.total, 0)
            } />
            {purchases.map(purchase => (
                <div key={purchase.id} className="w-[90%] md:w-4/5 flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
                <DateID purchaseId={purchase.id} date={format(
                    new Date(purchase.created_at),
                    'dd/MM/yyyy HH:mm'
                )}/>
                <div className="w-full flex flex-col items-center space-y-4">
                    {purchase.order.map(order => (
                        <ProductCardStatic
                            key={order.product.id}
                            id={order.product.id}
                            title={order.product.name}
                            totalPrice={order.product.price}
                            quantity={order.quantity}
                            thumbnail={order.product.thumbnail}
                        />
                    ))}
                </div>
                <ShoppingHistoryFooter finalPrice={purchase.total} id={purchase.id} />
                </div>
            )
            )}
        </div>
    );
}

export default ShoppingHistory;
