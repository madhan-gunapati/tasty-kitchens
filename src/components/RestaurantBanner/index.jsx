import { FaStar } from "react-icons/fa";
const RestaurantBanner = ()=>{
    return <div id='restaurant-banner'  className="flex items-center bg-black p-5 my-2 text-white"> 
    <img className="m-1 w-96 h-48 rounded" src='https://picsum.photos/200/300' alt='restaurant banner' />
    <div className="m-1">
    <h3 className="font-bold text-2xl">Mc Donald's</h3>
    <p>American,Fast Food, Snacks</p>
    <p>TGF Variety Mall Kurnool, New Krishna Nagar</p>
    <div className="flex items-center justify-between my-2">
        <div>
        <FaStar  size={20} /> 4.4
            <p>200+ Ratings</p>
        </div>
        <hr className="w-8 rotate-90" />
        <div>
            <p>₹ 350</p>
            <p>Cost for two</p>
        </div>
    </div>
    </div>
</div>
}

export default RestaurantBanner