import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-screen md:flex items-center md:justify-evenly md:flex-wrap w-12/12 ml-4  '>
        <div className='nav1 w-52 h-18 text-left md:w-60 md:h-18  ' >
        <NavLink to="/"><img  src='images/logo.svg' /></NavLink>
            
        </div>
        <div className='nav2 md:w-6/12 hidden md:flex flex-col items-center md:flex-row md:items-center md:flex-wrap justify-around py-2 mt-2 text-base'>
            <><NavLink to="/" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Home</NavLink></>
            <><NavLink to="/pricing" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Pricing</NavLink></>
            <><NavLink to="/products" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Product & Services</NavLink></>
            <><NavLink to="/about" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>About</NavLink></>
            <NavLink to="/contact" className={({ isActive })=>(isActive ? "text-green-800 font-bold" : "text-gray-400")}>Contact Us</NavLink>
        </div>
        <div className='nav3 w-3/12 hidden md:flex flex-col md:flex-row md:flex-wrap items-center justify-evenly'>
        <NavLink to="/login" className='w-24 h-12 border-2 border-green-700 text-green-700 rounded-md flex items-center justify-center'>Sign In</NavLink>
            <NavLink to="/signup" className='w-24 h-12 border-2  border-green-600 bg-green-600 text-white rounded-md flex items-center justify-center'>Sign Up</NavLink>

        </div>
        




    </nav>
  )
}

export default Nav