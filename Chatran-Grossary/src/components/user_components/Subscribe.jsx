
function Subscribe() {
    return (

        <div className="w-full bg-gray-50 rounded-2xl px-2 text-center text-white py-20 flex flex-col items-center justify-center mt-10">
            <p className="text-primary-lightgreen font-medium">Get updated</p>
            <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2 text-primary-darkgreen">Subscribe to our Chatran Grossary & Get the Best Deals</h1>
            <div className="flex items-center justify-center mt-10 border border-primary-lightgreen focus-within:outline focus-within:outline-primary-lightgreen text-sm rounded-full h-14 max-w-md w-full">
                <input type="text" className="bg-transparent text-primary-darkgreen outline-none rounded-full px-4 h-full flex-1" placeholder="Enter your email address" />
                <button className="rounded-full h-11 mr-1 px-8 flex items-center justify-center bg-primary-lightgreen hover:bg-primary-darkgreen transition text-primary-darkgreen hover:text-primary-lightgreen">
                    Subscribe now
                </button>
            </div>
        </div>
    );
};

export default Subscribe;