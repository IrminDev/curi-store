import React from 'react'
import CountCard from '../../components/CountCard'
import { FaUsers, FaTags, FaBox, FaMoneyBill } from "react-icons/fa";
import { BarChart } from '@mui/x-charts/BarChart';

const Stats = () => {
    return (
        <div className=' flex flex-col justify-center mt-20'>
            <div className=' h-auto flex flex-row flex-wrap items-center justify-evenly w-full mt-5'>
                <CountCard number={0} label={'Usuarios'} background={'bg-teal-800'}>
                    <FaUsers/>
                </CountCard>
                <CountCard number={0} label={'Productos'} background={'bg-teal-700'}>
                    <FaBox/>
                </CountCard>
                <CountCard number={0} label={'Ventas'} background={'bg-teal-800'}>
                    <FaTags/>
                </CountCard>
                <CountCard number={0} label={'Ingresos'} background={'bg-teal-700'}>
                    <FaMoneyBill/>
                </CountCard>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20'>
                <h2 className=' text-4xl font-bold'>Estadísticas por productos</h2>
                <div className=' flex flex-row items-center justify-center w-[80%]'>
                    <BarChart
                    series={[
                        { data: [35, 44, 24, 34] },
                    ]}
                    height={350}
                    xAxis={[{ data: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20'>
                <h2 className=' text-4xl font-bold'>Estadísticas por categorías</h2>
                <div className=' flex flex-row items-center justify-center w-[80%]'>
                    <BarChart
                    series={[
                        { data: [155, 234, 254, 122] },
                    ]}
                    height={350}
                    xAxis={[{ data: ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4'], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mb-20'>
                <h2 className=' text-4xl font-bold'>Estadísticas por marcas</h2>
                <div className=' flex flex-row items-center justify-center w-[80%]'>
                    <BarChart
                    series={[
                        { data: [67, 89, 110, 59] },
                    ]}
                    height={350}
                    xAxis={[{ data: ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4'], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats