import React from 'react';
import ShoppingHistoryHeader from '../../components/ShoppingHistoryHeader';
import ProductCardStatic from '../../components/ProductCardStatic';
import DateID from '../../components/DateID';
import ShoppingHistoryFooter from '../../components/ShoppingHistoryFooter';

const ShoppingHistory = () => {
    
    return (
        <div className=' w-full flex flex-col items-center space-y-4 pb-24 md:pb-0'>
            {/* Contenedor de la página */}
            <ShoppingHistoryHeader quantityShopping={6} totalPrice={200} />
            {/* 
            Contenedor global que incluye tres bloques 
                DateID (para el id y fecha)
                Footer (boton para ver factura y la suma total pagada de cada compra)
                ProductCardStatic (Información resumida de lo que se compró sin modificarlo)
            */}
            <div className="w-[90%] md:w-4/5 flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
                <DateID purchaseId={152} day={12} month={12} year={2024} />
                {/* Contenedor de todos los productos comprados */}
                <div className="w-full flex flex-col items-center space-y-4">
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                </div>
                <ShoppingHistoryFooter finalPrice={1500} />
            </div>
            <div className="w-[90%] md:w-4/5 flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
                <DateID purchaseId={152} day={12} month={12} year={2024} />
                {/* Contenedor de todos los productos comprados */}
                <div className="w-full flex flex-col items-center space-y-4">
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                    <ProductCardStatic
                        id={1}
                        title="Samsung Galaxy tab S8 Ultra con SmartWatch y Galaxy Buds plus"
                        totalPrice={1500}
                        quantity={5}
                        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2h0NpAHidpfgr7_7ZXH0ZWpJnX4SAEXhDA&s"
                    />
                </div>
                <ShoppingHistoryFooter finalPrice={1500} />
            </div>
        </div>
    );
}

export default ShoppingHistory;
