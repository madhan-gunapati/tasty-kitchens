import { Link } from "react-router-dom"

const NotFound  = ()=>{
    return <div className="flex h-screen flex-col justify-center items-center">
        <img src='' alt='Not Found ' />
        <h2 className="font-bold text-xl m-1">Page Not Found</h2>
        <p className="text-gray-500 mt-1">We are sorry, the page you requested could not be found.</p>
        <p className="text-gray-500 mb-1">Please go back to the Home Page</p>
        <Link to='/' className="m-1" ><button type='button' className="bg-Orange text-white rounded p-2" >Home Page</button></Link>
    </div>
}

export default NotFound