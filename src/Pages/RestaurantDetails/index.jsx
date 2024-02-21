import AppFooter from "../../components/AppFooter"
import AppHeader from "../../components/AppHeader"
import FoodItemCard from "../../components/FoodItemCard"
import RestaurantBanner from "../../components/RestaurantBanner"
const RestaurantDetails = ()=>{
    return <div >
       <AppHeader />
       <RestaurantBanner />
       <AppFooter />
       <div className="flex flex-wrap ">
       <FoodItemCard />
       <FoodItemCard />
       <FoodItemCard />
       <FoodItemCard />
       <FoodItemCard />
       <FoodItemCard />
       <FoodItemCard />
       <FoodItemCard />
       </div>
    </div>
}


export default RestaurantDetails