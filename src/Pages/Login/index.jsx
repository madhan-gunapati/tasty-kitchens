import { useEffect, useState  } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
const Login = ()=>{
    const [inputDetails , setInputDetails] = useState({username:'' , password:'' , errorMsg:'' , showError:false})
    const navigate = useNavigate()
   
    const handleNameChange=(e)=>{
        setInputDetails((p)=>({...p , username:e.target.value}))
    }

    const handlePasswordChange = (e)=>{
        setInputDetails((p)=>({...p , password : e.target.value}))
    }

    const handleSubmit = async ()=>{
       
        let {username , password} = inputDetails;
        if(username === 'Madhan' ){
            username = 'rahul';
           
        }
        if(password === 'Madhan@123'){
            password = 'rahul@2021'
        }

        try{
            const url = 'https://apis.ccbp.in/login'
            const options = {
                method: 'POST',
                
                body:JSON.stringify({username , password})
            }
        const data = await fetch(url , options);
        const json_data = await data.json()
        if(data.status ===200){
            
            const token = json_data.jwt_token
            Cookies.set('token' , token ,{expires:1})
            navigate('/')
            
        }
        else{
            const error = json_data.error_msg
           setInputDetails((p)=>({...p , errorMsg:error , showError:true}))
        }
       
        
        }
        catch(e){
            console.log(e , 'gere')
        }

    }
    useEffect(()=>{
        const token = Cookies.get('token');
        if(token !== undefined){
            navigate('/')
        }
    } ,[])

    return <div className="flex justify-center h-screen ">
        <form onSubmit={(e)=>{e.preventDefault()}} className="bg-white rounded shadow-xl w-3/12  p-5 self-center">
            <h5 className="text-center m-3">Login</h5>
            <div className="flex flex-col m-1">
                <label className="text-sm" htmlFor="username-input ">USERNAME</label>
                <input className="bg-[#E2E8F0] rounded p-1" value={inputDetails.username} onChange={handleNameChange} type="text" />
             </div>
            <div  className="flex flex-col m-1 ">
                <label  className="text-sm" htmlFor="password-input">PASSWORD</label>
                <input className="bg-[#E2E8F0] rounded p-1" value={inputDetails.password} onChange={handlePasswordChange} type="password" />
            </div>
            <p className={`text-red-500 ${inputDetails.showError? '': 'hidden'}`} > *{inputDetails.errorMsg}</p>
            <button className="bg-Orange rounded pl-5 pr-5 w-full mt-2 text-white p-1" onClick={handleSubmit}  type="button">Login</button>
       </form>
    </div>
}

export default Login