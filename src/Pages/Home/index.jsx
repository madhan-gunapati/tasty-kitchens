import AppFooter from "../../components/AppFooter"
import AppHeader from "../../components/AppHeader"
import Carousel from "../../components/Carousel"
import PopularRestaurants from "../../components/PopularRestaurants"
import RestaurantCard from "../../components/RestaurantCard"


const Home = ()=>{
    return <div >
        <AppHeader />
       <div className="p-2">
            <Carousel />
            <PopularRestaurants />
            <div className="m-2 ">
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
            </div>
        </div>
        <AppFooter />
        



    </div>
    
}

export default Home