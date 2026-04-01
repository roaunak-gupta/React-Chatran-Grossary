import React from 'react'
import MainBanner from '../../components/user_components/MainBanner'
import Categories from '../../components/user_components/Categories'
import BestSeller from '../../components/user_components/BestSeller'
import BottomBanner from '../../components/user_components/BottomBanner'
import NewsLetter from '../../components/user_components/Subscribe'

const Home = () => {
    return (
        <div className='mt-10'>
            <MainBanner />
            <Categories />
            <BestSeller />
            <BottomBanner />
            <NewsLetter />
        </div>
    )
}

export default Home