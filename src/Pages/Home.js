import React from 'react'
import images from '../Components/Data'
import Data from '../Components/Data'

const Home = () => {
  return (
    <div className='home w-12/12 h-auto ' >
        <div className='hero flex  m-auto w-11/12'>
            <div className='hero-1 w-6/12 flex flex-col'>
                <div className='heading1 w-10/12 text-2xl sm:text-3xl md:text-5xl lg:text-7xl  font-sans md:leading-snug mt-10 md:mt-20 font-bold text-gray-600' >
                Deliver Projects On Time with <span className='text-green-800'>Project</span><span className='text-yellow-600'>Whiz</span>
                </div>
                <div className='paragraph1 md:w-10/12 text-sm mt-5 md:mt-10 md:text-2xl md:leading-8 text-gray-600'>
                Let’s help you plan projects, collaborate with teammates, align goals, and organize tasks. All these on a <span className='text-yellow-600'>BUDGET.</span>

                </div>
                <div className='newsletter w-10/12 my-10 flex md:flex-row flex-col gap-4 text-xs lg:text-sm xl: text-base'>
                    <input type='text' placeholder='Enter your Email here' className='w-12/12 md:w-6/12 h-8 md:h-10 border-2 rounded-lg placeholder:pl-2'/>
                    <button className='w-12/12 md:w-4/12 h-8 md:h-10 rounded-lg bg-green-600 text-white md:ml-4'>Get Started for Free</button>

                </div>
                

            </div>
            <div className='hero-1 w-6/12'>
                <img src='images/heroi-llustrartion.svg' />
                
                </div>

        </div>
        <div className='brand bg-green-200 flex flex-col m-auto min-h-54'>
            <div className='brandheading m-auto text-2xl md:text-5xl font-sans leading-snug mt-20 font-bold text-gray-600 text-center'>
                Brands That Trust Us 
                
            </div>
            
             
            {images.map((img)=>{
                return ( <div className='brands grid grid-cols-4 gap-12 w-10/12 m-auto my-16'>
                <img src={`${img?.Google}`} className='w-8/12' />
                <img src={`${img?.Pitch}`} className='w-8/12'/>
                <img src={`${img?.verizon}`} className='w-8/12'/>
                <img src={`${img?.Airbnb}`} className='w-8/12'/>
                <img src={`${img?.Stripe}`} className='w-8/12'/>
                <img src={`${img?.Indigo}`} className='w-8/12'/>
                <img src={`${img?.WeChat}`} className='w-8/12'/>
                <img src={`${img?.Pinterest}`} className='w-8/12'/>
                </div>
                
                )
                
                
                })}

            <div className='trusted m-auto text-gray-400 md:text-2xl mb-12 text-center text-xs'>
            Trusted by over 8000+ brands and individuals worldwide

            </div>
                




        </div>
    </div>
  )
}

export default Home