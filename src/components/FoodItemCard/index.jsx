import { FaStar } from "react-icons/fa";
const FoodItemCard = ()=>{
    return <div className="flex items-center justify-start ">
    <img className="h-24 w-32 m-1 rounded" src='https://picsum.photos/200/300' alt='Restaurant logo' />
    <div>
        <h3 className="font-bold">Chicken Roast</h3>
        <p className="text-gray-500">₹ 350.00</p>
        <div className="flex align-center">
        <FaStar color="gold" size={20} />
      <span className="font-bold ml-1">4.4</span> 
        </div>
       <button className="text-Orange border-2 border-Orange rounded px-3 " type="button">ADD</button>
    </div>
</div>
}

export default FoodItemCard