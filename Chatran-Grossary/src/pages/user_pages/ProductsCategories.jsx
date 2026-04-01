import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom';
import { categories } from '../../assets/assets';
import ProductCard from '../../components/user_components/ProductCard';

const ProductsCategories = () => {

    const { products } = useAppContext();
    const { category } = useParams();

    const searchCategories = categories.find((item) => item.path.toLowerCase() === category)

    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)
    return (
        <div className='mt-16'>
            {searchCategories && (
                <div className='flex flex-col items-end w-max'>
                    <p className='text-2xl font-medium'>{searchCategories.text.toUpperCase()}</p>
                    <div className='w-16 h-0.5 bg-primary-lightgreen rounded-full'></div>
                </div>
            )}
            {filteredProducts.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-16'>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center h-[60vh]'>
                    <div>
                        <p className='text-primary-darkgreen p-2 text-2xl font-medium'>No Items found in this Category.</p>
                        <div className='w-20 h-0.5 bg-primary-lightgreen rounded-full'></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductsCategories