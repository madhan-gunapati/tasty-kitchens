import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const RestaurantCard = (props)=>{
    const {data} = props
    const {image_url, id , name , cuisine , user_rating:{rating , total_reviews , rating_color} } = data
    return <li className=" list-none w-1/4 m-3 "><Link to={`restaurant-details/${id}`} className="flex items-center justify-around">
        <img className="h-20 w-1/3 m-1  rounded " src={image_url} alt='Restaurant logo' />
        <div className="w-2/3 text-wrap">
            <h5 className="font-bold text-sm">{name}</h5>
            <p className="text-gray-500">{cuisine}</p>
            <div className="flex align-center">
            <FaStar color={rating_color} size={20} />
            <p className="ml-1 text-gray-400"> <span className="font-bold text-black">{rating}</span> ({total_reviews} ratings) </p>
            </div>
           
        </div>
    </Link></li>
}

export default RestaurantCard