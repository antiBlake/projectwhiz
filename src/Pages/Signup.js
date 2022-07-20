import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup p-8 md:p-16'>
        <div className='register flex flex-col mt-8 md:px-24'>
            <h5 className='text-sm md:text-base font-medium text-gray-400'>Get started for free</h5>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500'>Sign Up to <span className='text-green-700'>Project</span><span className='text-yellow-600'>Whiz</span></h2>

            <h5 className='text-sm md:text-base font-medium text-gray-400 mt-8 md:mt-12'>Already have an account ? <span className='text-green-600'> <NavLink to="/login" > Login</NavLink></span></h5>

            <div className='form grid grid-cols-1 gap-8 md:gap-12 text-gray-400 md:w-7/12 mt-8'>
                <input className='border rounded-lg font-light h-12 p-4' type='text' placeholder='Your full name' />
                <input className='border rounded-lg font-light h-12 p-4' type='email' placeholder='mail@email.com' />

                <input className='border rounded-lg font-light h-12 p-4' type='password' placeholder='6+ characters with one capital letter' />
                <button  className='w-12/12 h-12 md:h-12 rounded-lg bg-green-500 text-white '>Get Started</button>
                <div className='or text-center'>
                    OR
                </div>
                <button  className='w-12/12 h-12 md:h-12 border-green-500 border rounded-lg text-green-500 bg-white '>Sign in with Google</button>
                <h5 className='text-sm md:text-base font-light text-gray-400'>By signing up, you agree to our communications and usage terms.</h5>



            </div>
            

        </div>
    </div>
  )
}

export default Signup