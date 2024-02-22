import { FaPinterest, FaInstagram,FaTwitter ,FaSquareFacebook} from "react-icons/fa6";
import FooterAppLogo from '../../assets/FooterAppLogo.png'
const AppFooter = ()=>{
    return <div  className="bg-[rgb(15,23,42)] text-white p-1 ml-0  text-xs fixed bottom-0 w-screen h-20 text-center ">
       <div className="flex justify-center">
       <img src={FooterAppLogo} alt='logo' className="w-4 h-4 mx-1" />
       <h6 className="font-bold italic font-sans">Tasty Kitchens</h6>
       </div>
       <p>The only thing we are serious about is food.<br/> Contact us on</p>
       <div className="flex flex-row justify-center m-1">
        <FaPinterest className="m-1" color={'white'} size={14} /> 
         <FaInstagram   className="m-1" size={14}  color={'white'} />
         <FaTwitter   className="m-1" size={14}   color={'white'} />
         <FaSquareFacebook  className="m-1" size={14}   color={'white'} />
       </div>
    </div>
}

export default AppFooter