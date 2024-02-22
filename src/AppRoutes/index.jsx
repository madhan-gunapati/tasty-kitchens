import { Routes , Route } from "react-router-dom";
import Login from "../Pages/Login";

import ProtectedRoute from "../Pages/ProtectedRoute";

const AppRoutes = ()=><Routes>
    <Route path='/login' element={<Login />} />
    <Route path='*' element={<ProtectedRoute />} />
  
</Routes>

export default AppRoutes