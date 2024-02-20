import { MdOutlineSort } from "react-icons/md";
const PopularRestaurants = ()=>{
    return <div>
        <div className="flex justify-between m-2"> 
             <div>
                     <h4 className="font-bold">Popular Restaurants</h4>
                    <p className="text-gray-500">Select Your favourite restaurant special dish and make your day happy...</p>
             </div>
             <div className="flex items-center text-gray-500">
                    <MdOutlineSort className="m-1"  size={25}/>
                     <p className="m-1">Sort by</p>
                     <select className="m-1" >
                        <option >Lowest</option>
                        <option>Highest</option>
                     </select>
             </div>
       </div>
       <hr />
    </div>
}

export default PopularRestaurants