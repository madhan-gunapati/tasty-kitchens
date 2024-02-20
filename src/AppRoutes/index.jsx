import { Routes , Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import RestaurantDetails from "../Pages/RestaurantDetails";

const AppRoutes = ()=><Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home />} />
    <Route path="/restaurant-details/:id" element={<RestaurantDetails />} />

</Routes>

export default AppRoutes