import { FaPinterest, FaInstagram,FaTwitter ,FaSquareFacebook} from "react-icons/fa6";

const AppFooter = ()=>{
    return <div  className="bg-[#0F172A] text-white p-1 ml-0  text-xs fixed bottom-0 w-screen h-20 text-center ">
       <h6>Tasty Kitchens</h6>
       <p>The only thing we are serious about is food.<br/> Contact us on</p>
       <div className="flex flex-row justify-center m-1">
        <FaPinterest className="m-1" color={'white'}  /> 
         <FaInstagram   className="m-1"  color={'white'} />
         <FaTwitter   className="m-1"  color={'white'} />
         <FaSquareFacebook  className="m-1"   color={'white'} />
       </div>
    </div>
}

export default AppFooter