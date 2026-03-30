import Home from './pages/user_pages/Home';
import AllProducts from './pages/user_pages/AllProducts';
import Contacts from './pages/user_pages/Contacts';
import MyOrders from './pages/user_pages/MyOrders';
import ProductsCategories from './pages/user_pages/ProductsCategories';
import ProductDetails from './pages/user_pages/ProductDetails';
import MyCart from './pages/user_pages/MyCart';
import AddAddress from './pages/user_pages/AddAddress';
import SellerLayout from './pages/seller_pages/SellerLayout';
import AddProducts from './pages/seller_pages/AddProducts';
import Orders from './pages/seller_pages/Orders';
import ProductList from './pages/seller_pages/ProductList';
import ErrorPage from './pages/user_pages/ErrorPage';

import Navbar from './components/user_components/Navbar'
import Footer from './components/user_components/Footer';
import Sign from './components/user_components/Sign';
import SellerLogin from './components/seller_components/SellerLogin';

import { Route, Routes, useLocation } from "react-router";
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';
import { URL_ADD_ADDRESS, URL_ALL_PRODUCTS, URL_CART, URL_CONTECTS, URL_HOME, URL_IS_SELLER, URL_MY_ORDERS, URL_PRODUCTS_CATEGORY, URL_PRODUCTS_CATEGORY_ID, URL_SELLER_ORDER_LIST, URL_SELLER_PRODUCT_LIST } from './Utilities/Constants'

function App() {

  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();

  return (
    <>
      {/* Navigation Components */}
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Sign /> : null}

      <Toaster />


      {/* Body Components */}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg-px-24 xl:px-32"}`}>
        <Routes>

          // User Route
          <Route path={URL_HOME} element={<Home />} />
          <Route path={URL_ALL_PRODUCTS} element={<AllProducts />} />
          <Route path={URL_PRODUCTS_CATEGORY} element={<ProductsCategories />} />
          <Route path={URL_PRODUCTS_CATEGORY_ID} element={<ProductDetails />} />
          <Route path={URL_CART} element={<MyCart />} />
          <Route path={URL_CONTECTS} element={<Contacts />} />
          <Route path={URL_MY_ORDERS} element={<MyOrders />} />
          <Route path={URL_ADD_ADDRESS} element={<AddAddress />} />

          // Seller Route
          <Route path={URL_IS_SELLER} element={isSeller ? <SellerLayout /> : <SellerLogin />} />
          {/* <Route index element={isSeller ? <AddProducts /> : null} /> */}
          <Route path={URL_SELLER_PRODUCT_LIST} element={<ProductList />} />
          <Route path={URL_SELLER_ORDER_LIST} element={<Orders />} />

          //Error Page
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>

      {/* Footer Components */}
      {isSellerPath ? null : <Footer />}
    </>
  )
}

export default App