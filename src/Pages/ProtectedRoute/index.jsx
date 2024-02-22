import Cookies from "js-cookie"
import { Routes,Route,  useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "../Home"
import RestaurantDetails from "../RestaurantDetails";
import Cart from "../Cart";
import PaymentSuccessful from "../PaymentSuccessful";
import NotFound from "../NotFound";

const ProtectedRoute = ()=>{
    const [access , changeAccess] = useState(false)
    const navigate = useNavigate()
    const token = Cookies.get('token')
    
    useEffect(()=>{
        if(token === undefined){
           
            navigate('/login')
            
        }
        else{
            changeAccess(true)
        }
    } ,[])
   
    return (!access ? <p>Loading.....</p>:
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/restaurant-details/:id" element={<RestaurantDetails />} />
    <Route path='/cart' element={<Cart /> } />
    <Route path='/payment-successful' element={<PaymentSuccessful /> } />
    <Route path='*' element={<NotFound />} />
</Routes>
 )
}

export default ProtectedRoute