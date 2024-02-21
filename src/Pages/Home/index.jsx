
import AppFooter from "../../components/AppFooter"
import AppHeader from "../../components/AppHeader"
import Carousel from "../../components/Carousel"
import PopularRestaurants from "../../components/PopularRestaurants"


const Home = ()=>{
    

    return <div >
        <AppHeader />
       <div className="p-1">
            <Carousel />
            <PopularRestaurants />
         
           
         
       
        



    </div>
    <AppFooter />
    </div>
}

export default Home