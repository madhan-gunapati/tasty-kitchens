import { Link } from "react-router-dom"
import EmptyCartImg from '../../assets/NoCartView.png'
const EmptyCart = ()=>{
    return <div className="flex p-2 text-center flex-col justify-center items-center h-96">
        <img src={EmptyCartImg} alt='empty cart' className="w-32 md:w-48" />
        <h2 className="font-semibold text-xl">No Orders Yet!</h2>
        <p className="text-gray-600">Your cart is empty. Add something from the menu.</p>
       <Link to='/'> <button type="button" className="bg-Orange p-2 text-white rounded m-2">Order Now</button></Link>
    </div>
}

export default EmptyCart