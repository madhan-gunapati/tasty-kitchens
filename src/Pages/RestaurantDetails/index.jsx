import { useEffect, useState } from "react"
import AppFooter from "../../components/AppFooter"
import AppHeader from "../../components/AppHeader"
import FoodItemCard from "../../components/FoodItemCard"
import RestaurantBanner from "../../components/RestaurantBanner"
import { useParams } from "react-router-dom"
import Cookies from "js-cookie"
import { FaStar } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner"
const RestaurantDetails = ()=>{
    const [data, setData] = useState('')
    const {id} = useParams()

    useEffect( ()=>{
        const fetchDetails = async()=>{
                const url = `https://apis.ccbp.in/restaurants-list/${id}`
                const token = Cookies.get('token')
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
                       
                        setData(data)
                    }
                    else{
                        console.log('Error : ', data.error_msg)
                    }
                }
                catch(e){
                    console.log('Error : ' , e)
                }
        }
        fetchDetails()
    } , [])
    return <div >
       <AppHeader />
      
      
       {data === '' ?<div className="flex justify-center p-3"> <TailSpin color='orange' /> </div> :
      <div className="mb-20"> 
        <div id='restaurant-banner'  className="flex items-center text-xs bg-black p-4 pl-5   text-white"> 
                <img className="m-1 ml-5 w-56 h-24 rounded" src={data.image_url} alt='restaurant banner' />
                 <div className="m-2 ml-2">
                     <h3 className="font-bold text-xl">{data.name}</h3>
                     <p>{data.cuisine}</p>
                     <p>{data.location}</p>
             <div className="flex items-center justify-between my-1">
        <div>
            <div className="flex"> <FaStar  size={15} /> <p>{data.rating}</p>        </div>
            <p>{data.reviews_count} Ratings</p>
        </div>
            <hr className="w-8 rotate-90" />
        <div>
            <p>₹ {data.cost_for_two}</p>
            <p>Cost for two</p>
        </div>
    </div>
    </div>
</div>

<ul className="flex  flex-wrap justify-around">
   {data.food_items.map((item)=><FoodItemCard key={item.id} data={item} />)}
</ul>

      </div>
        }
         <AppFooter />
    </div>
}


export default RestaurantDetails