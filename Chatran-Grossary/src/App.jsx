import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from "react-router";
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Sign from './components/Sign';
import AllProducts from './pages/AllProducts';
import { URL_ALL_PRODUCTS, URL_CART, URL_CONTECTS, URL_HOME, URL_MY_ORDERS, URL_PRODUCTS_CATEGORY, URL_PRODUCTS_CATEGORY_ID } from './Utilities/Constants'
import Contacts from './pages/Contacts';
import MyOrders from './pages/MyOrders';
import ProductsCategories from './pages/ProductsCategories';
import ProductCard from './components/ProductCard';
import ProductDetails from './pages/ProductDetails';
import MyCart from './pages/MyCart';

function App() {

  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Sign /> : null}

      <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg-px-24 xl:px-32"}`}>
        <Routes>
          <Route path={URL_HOME} element={<Home />} />
          <Route path={URL_ALL_PRODUCTS} element={<AllProducts />} />
          <Route path={URL_PRODUCTS_CATEGORY} element={<ProductsCategories />} />
          <Route path={URL_PRODUCTS_CATEGORY_ID} element={<ProductDetails />} />
          <Route path={URL_CART} element={<MyCart />} />
          <Route path={URL_CONTECTS} element={<Contacts />} />
          <Route path={URL_MY_ORDERS} element={<MyOrders />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App