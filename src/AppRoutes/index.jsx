import { Routes , Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import RestaurantDetails from "../Pages/RestaurantDetails";
import Cart from "../Pages/Cart";
import PaymentSuccessful from "../Pages/PaymentSuccessful";

const AppRoutes = ()=><Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home />} />
    <Route path="/restaurant-details/:id" element={<RestaurantDetails />} />
    <Route path='/cart' element={<Cart /> } />
    <Route path='/payment-successful' element={<PaymentSuccessful /> } />
    <Route path='*' element={<p>Page Not found </p>} />
</Routes>

export default AppRoutes