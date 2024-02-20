import { FaStar } from "react-icons/fa";
const RestaurantCard = ()=>{
    return <div className="flex items-center ">
        <img className="h-24 w-32 m-1 rounded" src='https://picsum.photos/200/300' alt='Restaurant logo' />
        <div>
            <h3 className="font-bold">McDonalds</h3>
            <p className="text-gray-500">Fast Food</p>
            <div className="flex align-center">
            <FaStar color="gold" size={20} />
            <p className="ml-1"> <span className="font-bold">4.4</span> (222 ratings) </p>
            </div>
           
        </div>
    </div>
}

export default RestaurantCard