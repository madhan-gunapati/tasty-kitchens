import { useEffect, useState } from "react"
import { MdOutlineSort } from "react-icons/md";
import { TailSpin } from "react-loader-spinner"
import Cookies from "js-cookie"
import RestaurantCard from "../../components/RestaurantCard"
const PopularRestaurants = ()=>{
    const [restaurantList, setRestaurants] = useState({loading:true})
    const [sortValue , setSortValue] = useState('lowest')
    const handleSort = (e)=>{
                setSortValue(e.target.value)
               
    }
    useEffect(()=>{
        
        const fetchDetails = async()=>{
            const url = `https://apis.ccbp.in/restaurants-list?offset=0&limit=9&sort_by_rating=${sortValue}`
            const token  = Cookies.get('token')
            const options = {
                method:'GET',
                headers:{
                    'Content-Type':'Application/json',
                    'Accept':'Application/json',
                    'Authorization':`Bearer ${token}`
                }
            }
            try{
                const response = await fetch(url , options)
                const data = await response.json()
                if(response.ok){
                   
                    setRestaurants({loading:false , restaurants:data.restaurants})
                }
                else{
                    console.log('Error : ' , data.error_msg)
                }
            }
            catch(e){
                console.log('Error in fething Popular Restaurants' , e)
            }
        }
        fetchDetails()
    } ,[sortValue])
    return <div>
        <div className="flex justify-around m-2"> 
             <div>
                     <h4 className="font-bold">Popular Restaurants</h4>
                    <p className="text-gray-500">Select Your favourite restaurant special dish and make your day happy...</p>
             </div>
             <div className="flex items-center text-gray-500">
                    <MdOutlineSort className="m-1"  size={25}/>
                     <p className="m-1">Sort by</p>
                     <select className="m-1" value={sortValue} onChange={handleSort} >
                        <option value='Lowest'>Lowest</option>
                        <option value='Highest'>Highest</option>
                     </select>
             </div>
       </div>
       <hr />
       {restaurantList.loading?<div className=" p-2 flex flex-col justify-center items-center"> <TailSpin color="Orange"  />  </div>:
             <ul className="flex justify-center flex-wrap">
                {restaurantList.restaurants.map((item)=><RestaurantCard key={item.id} data={item} />)}
                
                </ul>}

    </div>
}

export default PopularRestaurants