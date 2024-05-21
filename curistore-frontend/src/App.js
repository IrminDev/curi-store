import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="fixed w-[100%]">
                <div className="flex justify-between items-center px-5 py-5 font-semibold">
                <Link to={'./'} className="text-3xl text-primary-lighter max-sm:text-xl">
                    <span className=' text-primary'>C</span>uristore
                </Link>
                <div className=" flex justify-between items-center ">
                    <ul className=" flex items-center ">
                    <li className=" inline-block mr-10 max-sm:mr-3 text-teal-800 transition ease-linear hover:text-primary-lighter">
                        <Link to={'./login'} className="text-xl max-sm:text-base">Inicio de sesión</Link>
                    </li>
                    <li className=" inline-block text-teal-800  transition ease-linear hover:text-primary-lighter">
                        <Link to={'./signup'} className=" text-xl max-sm:text-base">Registro</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className=" flex items-center h-[100vh] min-h-[500px] bg-main bg-no-repeat bg-cover bg-center">
            <div className=' px-10'>
                <h1 className=' text-7xl max-sm:text-4xl mb-10 text-white font-bold '>¡Bienvenido a la curistore!</h1>
                <p className=' text-2xl max-sm:text-lg mb-10 text-white'>
                    La tienda en línea donde podrás encontrar los productos más exclusivos y al mejor precio. Dentro de este sitio podrás realizar compras de disintos productos curiosos.
                    Recuerda que para poder realizar compras deberás registrarte o iniciar sesión.
                </p>
                <Link to={'./signup'} className=' transition ease-linear border rounded-md text-2xl border-teal-600 px-3 py-2 mt-5 text-teal-600 hover:text-white hover:border-none hover:bg-teal-600 max-sm:text-xl'>
                    Vamos allá
                </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
