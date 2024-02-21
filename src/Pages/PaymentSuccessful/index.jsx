import AppHeader from "../../components/AppHeader"
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
const PaymentSuccessful = ()=>{
    return <div className="h-screen">
        <AppHeader />
        <div className=" h-4/5 flex flex-col items-center justify-center ">
            <IoCheckmarkCircle  color="green" size={40} /> 
            <h2 className="font-bold">Payment Successful</h2>
            <p className="text-gray-600 m-1">Thank you for ordering</p>
            <p className="text-gray-600 m-1">Your payment is successfully completed.</p>
           <Link to='/'><button className="bg-Orange text-white rounded p-2 m-2" type="button">Go To Home Page</button></Link>
        </div>
    </div>
}


export default PaymentSuccessful