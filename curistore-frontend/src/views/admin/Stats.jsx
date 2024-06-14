import React, { useEffect, useState } from 'react'
import CountCard from '../../components/CountCard'
import { FaUsers, FaTags, FaBox, FaMoneyBill } from "react-icons/fa";
import { BarChart } from '@mui/x-charts/BarChart';
import statsService from '../../services/stats';

const Stats = () => {
    const [stats, setStats] = useState({
        users: 0,
        products: 0,
        pruchases: 0,
        earnings: 0
    });

    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token){
            statsService.getStats(token).then(response => {
                setStats({
                    users: response.data.users,
                    products: response.data.products,
                    purchases: response.data.purchases,
                    earnings: response.data.earnings !== null ? response.data.earnings : 0
                })
            });
    
            statsService.getStatsByProducts(token).then(response => {
                setProducts(response.data);
            });
    
            statsService.getStatsByCategories(token).then(response => {
                setCategories(response.data);
            })
    
            statsService.getStatsByBrands(token).then(response => {
                setBrands(response.data);
            })
        }
    }, []);

    return (
        <div className=' flex flex-col justify-center items-center mt-20 bg-teal-100'>
            <div className=' h-auto flex flex-row flex-wrap items-center justify-evenly w-full mt-5'>
                <CountCard number={stats.users} label={'Usuarios'} background={'bg-teal-800'}>
                    <FaUsers/>
                </CountCard>
                <CountCard number={stats.products} label={'Productos'} background={'bg-teal-700'}>
                    <FaBox/>
                </CountCard>
                <CountCard number={stats.purchases} label={'Ventas'} background={'bg-teal-800'}>
                    <FaTags/>
                </CountCard>
                <CountCard number={stats.earnings} label={'Ingresos'} background={'bg-teal-700'}>
                    <FaMoneyBill/>
                </CountCard>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20 w-[90%]'>
                <div className=' w-full border-b-4 border-teal-800 pb-2 mb-4'>
                    <h2 className=' text-4xl font-bold text-teal-800'>Estadísticas por productos</h2>
                </div>
                <div className=' flex flex-row items-center justify-center w-[80%]'>
                    <BarChart
                    series={[
                        { data: products.map(product => product.total_earnings).splice(0, 10)},
                    ]}
                    height={350}
                    xAxis={[{ data: products.map(product => product.title).splice(0, 10)
                    , scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20 w-[90%]'>
                <div className=' w-full border-b-4 border-teal-800 pb-2 mb-4'>
                    <h2 className=' text-4xl font-bold text-teal-800'>Estadísticas por categorías</h2>
                </div>
                <div className=' flex flex-row items-center justify-center w-[80%]'>
                    <BarChart
                    series={[
                        { data: categories.map(category => category.total_earnings).splice(0, 10)},
                    ]}
                    height={350}
                    xAxis={[{ data: categories.map(category => category.category).splice(0, 10)     
                        , scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20 w-[90%]'>
                <div className=' w-full border-b-4 border-teal-800 pb-2 mb-4'>
                    <h2 className=' text-4xl font-bold text-teal-800'>Estadísticas por marcas</h2>
                </div>
                <div className=' flex flex-row items-center justify-center w-[80%]'>
                    <BarChart
                    series={[
                        { data: brands.map(brand => brand.total_earnings).splice(0, 10)},
                    ]}
                    height={350}
                    xAxis={[{ data: brands.map(brand => brand.brand).splice(0, 10)     
                    , scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats