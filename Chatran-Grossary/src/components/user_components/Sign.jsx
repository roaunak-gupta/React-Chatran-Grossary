import { useState } from 'react'
import Chatran_Grossary from './Chatran_Grossary'
import { Link } from 'react-router'
import { useAppContext } from '../../context/AppContext';

const Sign = () => {

    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setShowUserLogin, setUser } = useAppContext();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setUser({
            email: "mordangrapher@gmail.com",
            name: "Mordan Grapher",
        })
        setShowUserLogin(false);
    }

    return (
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

                    <Link to={'/'} className="mb-4" title="Go to Chatran Grossary">
                        <Chatran_Grossary />
                    </Link>

                    <h2 className="text-4xl font-medium text-white/80">{state === "login" ? "Login" : "Sign Up"}</h2>

                    <p className="mt-2 text-base text-gray-500">
                        {state === "login" ? "Please enter email and password." : "Please enter your details."}
                    </p>

                    {state === "register" && (

                        <div className="mt-5">
                            <label className="font-medium text-white/80">Username</label>
                            <input
                                onChange={(e) => setName(e.target.value)} value={name}
                                placeholder="Mordan Grapher"
                                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary-lightgreen outline-none px-3 py-3 w-full text-white"
                                required
                                type="text"
                                name="text"
                            />
                        </div>
                    )}

                    <div className="mt-2">
                        <label className="font-medium text-white/80">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            placeholder="mordangrapher@gmail.com"
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
                            placeholder={state === "login" ? "Please enter your password" : "Create an password"}
                            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary-lightgreen outline-none px-3 py-3 w-full text-white"
                            required
                            type="password"
                            name="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-8 py-3 w-full cursor-pointer rounded-md bg-primary-lightgreen text-primary-darkgreen transition hover:bg-primary-darkgreen hover:text-primary-lightgreen"
                    >{state === "register" ? "Create Account" : "Login"}</button>


                    {state === "register" ? (
                        <p className='text-center py-8 mt-2'>
                            Already have account? <span onClick={() => setState("login")} className="text-primary-lightgreen cursor-pointer">click here</span>
                        </p>
                    ) : (
                        <p className='text-center py-8 mt-2'>
                            Create an account? <span onClick={() => setState("register")} className="text-primary-lightgreen cursor-pointer">click here</span>
                        </p>
                    )}

                </form>
            </main>
        </div>
    )
}

export default Sign  