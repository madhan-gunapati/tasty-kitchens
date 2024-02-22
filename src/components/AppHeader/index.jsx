import Cookies from 'js-cookie';
import React, { useState } from 'react';
import Logo from '../../assets/AppLogo.png'
import { Link, useNavigate } from 'react-router-dom';
const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const LogoutSession = ()=>{
      Cookies.remove('token');
      navigate('/login')
  }

  return (
    <nav className=" text-sm  border-gray-200 bg-gray-50">
     
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt=" Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-Orange font-sans italic">Tasty Kitchens</span>
        </Link>
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-50   dark:border-gray-700">
            <li>
            <Link to='/' className='block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Home</Link>
            </li>

            <li>
              
              <Link to='/cart' className='block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Cart</Link>
            </li>
           
           
            <li>
             <button type='button' onClick={LogoutSession} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-Orange md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
