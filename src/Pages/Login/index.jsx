const Login = ()=>{
    return <div className="flex justify-center h-screen ">
        <form className="bg-white rounded shadow-xl w-3/12  p-5 self-center">
            <h5 className="text-center m-3">Login</h5>
            <div className="flex flex-col m-1">
                <label className="text-sm" htmlFor="username-input ">USERNAME</label>
                <input className="bg-[#E2E8F0] rounded p-1" type="text" placeholder="name input" />
             </div>
            <div  className="flex flex-col m-1 ">
                <label  className="text-sm" htmlFor="password-input">PASSWORD</label>
                <input className="bg-[#E2E8F0] rounded p-1"type="password" />
            </div>
            <button className="bg-Orange rounded pl-5 pr-5 w-full mt-2 text-white p-1" type="button">Login</button>
       </form>
    </div>
}

export default Login