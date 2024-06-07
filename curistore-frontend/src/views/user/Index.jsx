import React, {useState, useEffect} from 'react'
import ProductCardIndex from '../../components/ProductCardIndex'
import SearchBar from '../../components/SearchBar'
import productService from '../../services/product'

const Index = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        productService.getAll().then(response => {
            setProducts(response.data);
        });
    }, []);
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className=' mt-24 flex flex-col items-center justify-center'>
            <div className=' w-[80%] flex items-center '>
                <SearchBar handleChange={handleChange} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-5">
                {
                    products.filter((product) => {
                        if(search === '') {
                            return product;
                        } else if(product.title.toLowerCase().includes(search.toLowerCase())) {
                            return product;
                        }
                    }).map(product => {
                        return <ProductCardIndex key={product.id} product={product}/>
                    })
                }
            </div>
        </div>
    )
}

export default Index