import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const { user, setUser, setShowUserLogin, navigate } = useAppContext();
    const logout = async () => {
        setUser(null);
        navigate('/');
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink onClick={() => { setOpen(false) }} className='flex jusfity-center items-center' to='/'>
                <img className='h-10' src={assets.chatran_logo} alt='Logo' />
                <h1 className='logo-grossary font-[Oleo Script] text-2xl pl-2'>Grossary</h1>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink className='hover:font-medium' to="/">Home</NavLink >
                <NavLink className='hover:font-medium' to="/product">All Products</NavLink >
                <NavLink className='hover:font-medium' to="/contact">Contact</NavLink >

                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="Search" />
                </div>

                {/* Cart Button */}
                <div onClick={() => {
                    navigate("/cart")
                }} className="relative cursor-pointer">
                    <img src={assets.cart_icon_2} alt="Cart" />
                    <button className="absolute -top-2 -right-3 text-xs text-primary-lightgreen bg-primary-darkgreen w-4.5 h-4.5 rounded-full hover:bg-primary-lightgreen hover:text-primary-darkgreen">3</button>
                </div>

                {/* Sign Button */}
                {!user ? (<button onClick={() => {
                    setShowUserLogin(true);
                }}
                    className="cursor-pointer px-8 py-2 text-primary-darkgreen bg-primary-lightgreen hover:bg-primary-darkgreen hover:text-primary-lightgreen transition rounded-full">
                    Login
                </button>
                ) : (
                    <div className='relative group'>
                        <img src={assets.profile_icon} alt='Profile' className='w-10' />
                        <ul className='hidden group-hover:block top-10 right-0 absolute bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li onClick={() => { navigate("/myorder") }}
                                className='cursor-pointer p-1.5 pl-3 hover:bg-primary-darkgreen/10'>My Order</li>
                            <li onClick={logout}
                                className='cursor-pointer p-1.5 pl-3 hover:bg-primary-darkgreen/10'>Logout !</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Menu button for Mobile view */}
            <div className='flex sm:hidden'>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <img src={assets.menu_icon} alt='Menu' />
                </button>
                <img src={assets.profile_icon} alt='Profile' className='w-10 ml-2 sm:hidden' />
            </div>


            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-24 border-2 border-amber-500 w-full bg-white shadow-2xl py-4 flex-col items-start gap-2 left-0 px-5 text-md md:hidden`}>

                    <NavLink className='hover:font-medium ml-3' to="/" onClick={() => { setOpen(false) }}><li>Home</li></NavLink >
                    <NavLink className='hover:font-medium ml-3' to="/product" onClick={() => { setOpen(false) }}><li>All Products</li></NavLink >
                    {user &&
                        <NavLink className='hover:font-medium ml-3' to="/myorder" onClick={() => { setOpen(false) }}><li>My Order</li></NavLink >
                    }
                    <NavLink className='hover:font-medium ml-3' to="/contact" onClick={() => { setOpen(false) }}><li>Contact</li></NavLink >
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
            )}
        </nav>
    )
}

export default Navbar