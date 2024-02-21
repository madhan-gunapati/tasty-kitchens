import { FaStar } from "react-icons/fa";
const FoodItemCard = ()=>{
    return <div className="flex items-center  justify-center w-2/5  text-xs">
    <img className="h-24 w-32 m-1 rounded" src='https://picsum.photos/200/300' alt='Restaurant logo' />
    <div className="m-2">
        <h3 className="font-medium text-xl">Chicken Roast</h3>
        <p className="text-gray-500">₹ 350.00</p>
        <div className="flex align-center">
        <FaStar color="gold" size={15} />
      <span className="font-bold ml-1">4.4</span> 
        </div>
       <button className="text-Orange border-2 border-Orange rounded px-3 " type="button">ADD </button>
    </div>
</div>
}

export default FoodItemCard