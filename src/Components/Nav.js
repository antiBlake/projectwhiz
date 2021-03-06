import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Nav = () => {
    const [navbutton, setnavbutton] = useState(false)

    const handleclick = ()=>{
        setnavbutton(prevnav =>!prevnav)
    }
  return (
    <>
    <nav className='flex md:flex items-center lg:justify-evenly md:flex-wrap w-12/12   '>
        <div className='nav1 w-52 h-18 text-left md:w-60 md:h-18  ' >
        <NavLink to="/"><img  src='images/logo2.svg' /></NavLink>
            
        </div>
        <div className='nav2 hidden md:w-6/12 lg:flex flex flex-col w-12/12 h-auto items-center md:flex-row md:items-center md:flex-wrap justify-center lg:justify-evenly py-2 mt-2 text-base'>
            <><NavLink to="/" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Home</NavLink></>
            <><NavLink to="/pricing" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Pricing</NavLink></>
            {/* <><NavLink to="/products" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Product & Services</NavLink></>
            <><NavLink to="/about" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>About</NavLink></> */}
            <NavLink to="/contact" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Contact Us</NavLink>
        </div>
        <div className='nav3 w-3/12 hidden lg:flex flex-col md:flex-row md:flex-wrap items-center justify-evenly'>
        <NavLink to="/login" className='w-24 h-12 border-2 border-green-600 text-green-600 rounded-md flex items-center justify-center'>Sign In</NavLink>
            <NavLink to="/signup" className='w-24 h-12  border-green-600 bg-green-500 text-white rounded-md flex items-center justify-center'>Sign Up</NavLink>

        </div>
        <div className='hamburger w-5/12 flex justify-end lg:hidden' onClick={handleclick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
  </div>
  
    </nav>
    <div className={`mobilenav transition ease-in-out duration-300 delay-100 ${navbutton ? "block" : "hidden"} `}>
        {/* <div className='close-nav' onClick={handleclick}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></div> */}
        <div className='navss grid grid-cols-1 gap-y-6 justify-items-center'>
            <><NavLink to="/" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Home</NavLink></>
            <><NavLink to="/pricing" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Pricing</NavLink></>
            {/* <><NavLink to="/products" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Product & Services</NavLink></>
            <><NavLink to="/about" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>About</NavLink></> */}
            <NavLink to="/contact" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Contact Us</NavLink>
            <div className='nav3 w-10/12 flex justify-around'>
        <NavLink to="/login" className='w-5/12 h-12 border-2 border-green-600 text-green-600 rounded-md flex items-center justify-center'>Sign In</NavLink>
            <NavLink to="/signup" className='w-5/12 h-12  border-green-600 bg-green-500 text-white rounded-md flex items-center justify-center'>Sign Up</NavLink>

        </div>

    </div>
    </div>
    </>

  )
}

export default Nav