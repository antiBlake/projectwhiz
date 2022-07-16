import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-screen h-auto flex flex-col items-center border-2 border-green-200'>
        <div className='footercontain w-11/12 h-10/12 flex items-center justify-between  flex-row'>
            <div className='footerlogo w-2/12 '>
                <img src='images/footerlogo.svg' />
            </div>
            <div className='footerlinks w-9/12 h-44 hidden sm:grid sm:grid-cols-3  md:grid-cols-3  lg:grid-cols-4 gap-4  font-medium text-center text-gray-600 mt-4'>
            <><NavLink to="/products">Product & Services</NavLink></>
            <><NavLink to="/" >Support</NavLink></>
            <><NavLink to="/contact" >Contact Us</NavLink></>
            <><NavLink to="/" >Dashboard</NavLink></>
            <><NavLink to="/pricing" >Pricing</NavLink></>
            <><NavLink to="/" >FAQs</NavLink></>
            <><NavLink to="/" >Testimonials</NavLink></>
            <><NavLink to="/" >Features</NavLink></>
            <><NavLink to="/" >Resources</NavLink></>
            <><NavLink to="/" >Solutions</NavLink></>
            <><NavLink to="/" >Blogs</NavLink></>
            <><NavLink to="/" >Careers</NavLink></>
            

            </div>
        </div>
        <div className='lastfooter flex flex-col w-10/12'>
            <div className='socials flex justify-center sm:justify-end  my-12'>
                <div className='arrangesocials pr-2 flex gap-6'>
                    <img src='images/linkedin.png' className='w-6 h-6'/>
                    <img src='images/twitter.png' className='w-6 h-6'/>
                    <img src='images/facebook.png' className='w-6 h-6'/>
                    <img src='images/instagram.png' className='w-6 h-6'/>
                    </div>
            </div>

            
            <div className='copy flex justify-between  md:text-center text-gray-400 text-xs md:text-sm lg:text-base'>
                <div className='copyright w-10/12 flex justify-start'>
                Copyright 2022. ProjectWhiz, Inc. All rights reserved
                </div>
                <div className='endd flex gap-2 md:gap-12'>
                <div className='privacy'>
                Privacy Policy
                </div>
                <div className='terms'>
                Terms of Use
                </div>
                </div>
            
        </div>
        </div>

    </footer>
  )
}

export default Footer