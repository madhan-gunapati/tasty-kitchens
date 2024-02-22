import { FaStar } from "react-icons/fa";
const RestaurantBanner = ()=>{
    
    return <div id='restaurant-banner'  className="flex items-center text-xs bg-[url('https://res.cloudinary.com/dujknj4ka/image/upload/v1708615158/BgImg_jv1txh.png')] p-1 pl-5  text-white"> 
    <img className="m-1 ml-5 w-56 h-24 rounded" src='https://picsum.photos/200/300' alt='restaurant banner' />
    <div className="m-1 ml-2">
    <h3 className="font-bold text-xl">Mc Donald's</h3>
    <p>American,Fast Food, Snacks</p>
    <p>TGF Variety Mall Kurnool, New Krishna Nagar</p>
    <div className="flex items-center justify-between my-1">
        <div>
            <div className="flex"> <FaStar  size={15} /> <p>4.4</p>        </div>
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