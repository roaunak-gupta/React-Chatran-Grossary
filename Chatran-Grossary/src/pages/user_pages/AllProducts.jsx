import { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import ProductCard from '../../components/user_components/ProductCard'
import { useState } from 'react';

const AllProducts = () => {

    const { products, searchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        try {
            if (searchQuery.length > 0) {
                setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
                ))
            } else {
                setFilteredProducts(products);
            }

        } catch (error) {
            console.log(error);
        }

    }, [products, searchQuery]);

    return (
        <div className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All Products</p>
                <div className='w-16 h-0.5 bg-primary-lightgreen rounded-full'></div>
            </div>
            <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16'>
                {filteredProducts.filter((product) => product.inStock).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AllProducts