import { useState } from 'react'
import Chatran_Grossary from '../user_components/Chatran_Grossary'
import { Link } from 'react-router'
import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import { URL_HOME, URL_IS_SELLER } from '../../Utilities/Constants'

const SellerLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isSeller, setIsSeller, navigate } = useAppContext();

    useEffect(() => {
        if (isSeller) {
            navigate(URL_IS_SELLER)
        }
    }, [isSeller]);

    setIsSeller(true);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setIsSeller(true);
    }

    return !isSeller && (
        <div onClick={(e) => {
            setShowUserLogin(false);
        }}
            className='fixed top-0 bottom-0 left-0 right-0 z-101 flex items-center text-sm text-gray-600 bg-black'>
            <main className="flex items-center justify-center w-full px-4 ">
                <form onClick={(e) => {
                    e.stopPropagation();
                }}
                    onSubmit={onSubmitHandler}
                    className="flex w-full flex-col max-w-96">

                    <Link to={URL_HOME} className="mb-4" title="Go to Chatran Grossary">
                        <Chatran_Grossary />
                    </Link>

                    <h2 className="text-4xl font-medium text-white/80"><span className='bg-primary-lightgreen px-1.5 rounded text-black font-black'>Seller</span> Login</h2>

                    <p className="mt-2 text-base text-gray-500">"Please enter your details."</p>

                    <div className="mt-2">
                        <label className="font-medium text-white/80">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            placeholder="Enter your Email"
                            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary-lightgreen outline-none px-3 py-3 w-full text-white"
                            required
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className="mt-2">
                        <label className="font-medium text-white/80">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)} value={password}
                            placeholder="Please enter your password"
                            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary-lightgreen outline-none px-3 py-3 w-full text-white"
                            required
                            type="password"
                            name="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="font-black text-lg mt-8 py-3 w-full cursor-pointer rounded-md bg-primary-lightgreen text-primary-darkgreen transition hover:bg-primary-darkgreen hover:text-primary-lightgreen"
                    >Login</button>

                </form>
            </main>
        </div>
    )
}

export default SellerLogin  