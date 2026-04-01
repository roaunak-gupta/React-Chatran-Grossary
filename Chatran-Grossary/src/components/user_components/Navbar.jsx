import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import { URL_HOME, URL_ALL_PRODUCTS, URL_CONTECTS, URL_MY_ORDERS, URL_CART } from '../../Utilities/Constants'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const { user, setUser, setShowUserLogin, navigate, searchQuery, setSearchQuery, getCartCount } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate(URL_HOME);
    }


    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate(URL_ALL_PRODUCTS);
        }
    }, [searchQuery]);

    return (
        // <div className='fixed top-0 left-0 w-full bg-white shadow-md z-150'>
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink onClick={() => { setOpen(false) }} className='flex jusfity-center items-center' to={URL_HOME}>
                <img className='h-10' src={assets.chatran_logo} alt='Logo' />
                <h1 className='logo-grossary text-primary-darkgreen text-2xl pl-2'>Grossary</h1>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">

                <NavLink to={URL_HOME}>{({ isActive }) => (
                    <div className='group'>
                        <h3>Home</h3>
                        <div className={`transition-transform duration-300 origin-right h-0.5 bg-primary-lightgreen rounded-full ${isActive ? "w-full scale-x-100" : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"}`}></div>
                    </div>
                )}</NavLink>

                <NavLink to={URL_ALL_PRODUCTS}>
                    {({ isActive }) => (
                        <div className="group">
                            <h3>All Products</h3>

                            <div className={`transition-transform duration-300 origin-right h-0.5 bg-primary-lightgreen rounded-full ${isActive ? "w-full scale-x-100" : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"}`}
                            ></div>
                        </div>
                    )}
                </NavLink>

                <NavLink to={URL_CONTECTS}>
                    {({ isActive }) => (
                        <div className="group">
                            <h3>Contact</h3>

                            <div className={`transition-transform duration-300 origin-right h-0.5 bg-primary-lightgreen rounded-full ${isActive ? "w-full scale-x-100" : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"}`}
                            ></div>
                        </div>
                    )}
                </NavLink>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="Search" />
                </div>

                {/* Cart Button */}
                <div onClick={() => {
                    navigate(URL_CART)
                }} className="relative cursor-pointer">
                    <img src={assets.cart_icon_2} alt="Cart" />
                    <button className="absolute -top-2 -right-3 text-xs text-primary-lightgreen bg-primary-darkgreen w-4.5 h-4.5 rounded-full hover:bg-primary-lightgreen hover:text-primary-darkgreen">{getCartCount()}</button>
                </div>

                {/* Sign Button */}
                {
                    !user ? (<button onClick={() => {
                        setShowUserLogin(true);
                    }}
                        className="cursor-pointer px-8 py-2 text-primary-darkgreen bg-primary-lightgreen hover:bg-primary-darkgreen hover:text-primary-lightgreen transition rounded-full">Login</button>
                    ) : (
                        <div className='relative group'>
                            <img src={assets.profile_icon} alt='Profile' className='w-10' />
                            <ul className='hidden group-hover:block top-10 right-0 absolute bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                                <li onClick={() => { navigate(URL_MY_ORDERS) }}
                                    className='cursor-pointer p-1.5 pl-3 hover:bg-primary-darkgreen/10'>My Order</li>
                                <li onClick={logout}
                                    className='cursor-pointer p-1.5 pl-3 hover:bg-primary-darkgreen/10'>Logout !</li>
                            </ul>
                        </div>
                    )
                }
            </div >

            {/* Menu button for Mobile view */}
            < div className='flex items-center gap-6 sm:hidden' >

                {/* Cart Button */}
                <div onClick={() => {
                    navigate(URL_CART)
                }} className="relative cursor-pointer">
                    <img src={assets.cart_icon_2} alt="Cart" />
                    <button className="absolute -top-2 -right-3 text-xs text-primary-lightgreen bg-primary-darkgreen w-4.5 h-4.5 rounded-full hover:bg-primary-lightgreen hover:text-primary-darkgreen">{getCartCount()}</button>
                </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className=" z-60">
                    {/* Menu Icon SVG */}
                    <img src={assets.menu_icon} alt='Menu' />
                </button>
            </div >


            {/* Mobile Menu */}
            {
                open && (
                    <div className={`${open ? 'flex' : 'hidden'} z-100 absolute top-24 w-full bg-white shadow-2xl py-4 flex-col items-start gap-2 left-0 px-5 text-md md:hidden`}>

                        <NavLink className='hover:font-medium ml-3' to={URL_HOME} onClick={() => { setOpen(false) }}><li>Home</li></NavLink >
                        <NavLink className='hover:font-medium ml-3' to={URL_ALL_PRODUCTS} onClick={() => { setOpen(false) }}><li>All Products</li></NavLink >
                        {user &&
                            <NavLink className='hover:font-medium ml-3' to={URL_MY_ORDERS} onClick={() => { setOpen(false) }}><li>My Order</li></NavLink >
                        }
                        <NavLink className='hover:font-medium ml-3' to={URL_CONTECTS} onClick={() => { setOpen(false) }}><li>Contact</li></NavLink >
                        {!user ? (
                            <button onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true);
                            }}
                                className="cursor-pointer px-6 py-2 mt-2 bg-primary-lightgreen hover:bg-primary-darkgreen transition text-primary-darkgreen rounded-full text-sm">Login</button>
                        ) : (
                            <button onClick={logout}
                                className="cursor-pointer px-6 py-2 mt-2 bg-primary-lightgreen hover:bg-primary-darkgreen transition text-primary-darkgreen rounded-full text-sm">Logout</button>
                        )}
                    </div>
                )
            }
        </nav >
        // </div>
    )
}

export default Navbar