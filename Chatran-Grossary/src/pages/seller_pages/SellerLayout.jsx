import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { URL_IS_SELLER, URL_SELLER_ORDER_LIST, URL_SELLER_PRODUCT_LIST } from "../../Utilities/Constants";

const SellerLayout = () => {

    const { setIsSeller } = useAppContext();

    const logout = async () => {
        setIsSeller(false);
        console.log("Seller Logout !");

    }

    const sidebarLinks = [
        { name: "Add Product", path: { URL_IS_SELLER }, icon: assets.add_icon },
        { name: "Product List", path: { URL_SELLER_PRODUCT_LIST }, icon: assets.product_list_icon },
        { name: "Order List", path: { URL_SELLER_ORDER_LIST }, icon: assets.order_icon },
    ];

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
                <div className='flex jusfity-center items-center'>
                    <img className='h-10' src={assets.chatran_logo} alt='Logo' />
                    <h1 className='logo-grossary text-primary-darkgreen text-2xl pl-2'>Grossary</h1>
                </div>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Roaunak</p>
                    <button onClick={() => logout()} className='border rounded-full text-sm px-4 py-1 hover:border-primary-lightgreen hover:text-primary-lightgreen'>Logout</button>
                </div>
            </div>

            <div className="flex">

                {/* <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === URL_IS_SELLER}
                            className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                    ${isActive ? "border-r-4 md:border-r-[6px] bg-primary-lightgreen/10 border-primary-lightgreen text-primary-darkgreen"
                                    : "hover:bg-gray-100/90 border-white text-gray-700"
                                }`
                            }>

                            <img src={item.icon} alt={item.name} />
                            <p className="md:block hidden text-center">{item.name}</p>
                        </NavLink>
                    ))}
                </div> */}

                <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <a href={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        <img src={item.icon} alt={item.name} />
                        
                        <p className="md:block hidden text-center">{item.name}</p>
                    </a>
                ))}
            </div>
                <Outlet />
            </div>
        </>
    );
};

export default SellerLayout;