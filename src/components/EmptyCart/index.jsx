import { Link } from "react-router-dom"
const EmptyCart = ()=>{
    return <div className="flex flex-col justify-center items-center h-96">
        <img src='' alt='empty cart' />
        <h2 className="font-semibold text-xl">No Orders Yet!</h2>
        <p className="text-gray-600">Your cart is empty. Add something from the menu.</p>
       <Link to='/'> <button type="button" className="bg-Orange p-2 text-white rounded">Order Now</button></Link>
    </div>
}

export default EmptyCart