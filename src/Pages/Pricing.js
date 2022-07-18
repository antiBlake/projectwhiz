import React from 'react'
import data, {faqdata} from '../Components/Data'
import Faq from '../Components/Faq'

const Pricing = () => {
    const faq = faqdata.map(item=>{
        return(
            <Faq key={item.id} {...item}/>
        )
    })
    const style = {
        backgroundImage: "url('images/Background (1).svg')",
        backgroundRepeat: "no-repeat"
    }
  return (
    <div className='pricing w-12/12'>
        <div className='pricing-bg ' style={style}>
            
            <div className='headingg m-auto text-2xl md:text-5xl font-sans leading-snug py-10 lg:py-20 font-bold text-gray-600 text-center tracking-wider'>
        Our Pricing Plans
         </div>
         <div className='para w-5/12 m-auto text-xs md:text-base text-gray-400'>
         Our prices are well tailored to fit your budget. Get great features on one tool to fit your team needs and amazing prices and with great offers too, No hidden fees!
         </div>
         <div className='para-1 w-5/12 m-auto md:text-sm text-xs text-gray-400 py-10'>
         No credit card required. Start with a free 7day trial.
         </div>
         <div className='pricingcards lg:w-11/12 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-8 mt-12 m-auto'>
                <div className='pricing-card w-8/12 h-12/12 md:border-none border-2 border-green-200 rounded-lg md:shadow-xl bg-white lg:mt-20'>
                    <h3 className='w-10/12 flex justify-center lg:justify-start mt-4 mb-10 text-green-600 text-xl text-center lg:m-left m-auto'>Lite Plan</h3>
                    <div className='amount flex text-gray-500 justify-around items-center '>
                        <h2 className='text-2xl md:text-44xl lg:text-4xl font-bold'>$70.00</h2>
                        <h5 className='flex justify-start text-xs lg:text-base lg:pr-4 font-semibold'>Per Month </h5>

                    </div>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto mt-4 grid grid-cols-1'>
                        <div className='include'>
                        Billed monthly
                        </div>
                        <div className='include'>
                        No recurring or hidden charges
                        </div>
                    </div>
                    <div className='morefeatures w-12/12 my-4 flex lg:flex-row text-xs lg:text-sm xl:text-base'>
                    <button className='m-auto border-2 lg:w-10/12 w-10/12 h-10 border-green-600 font-bold rounded-lg text-green-600'>Get Started</button>
                    </div>
                    <h3 className='cardname mt-6 text-gray-400  text-xl text-center'>Lite plan includes:</h3>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto my-6 grid grid-cols-1 gap-y-3'>
                        <div className='include'>
                        3 team members collaborations
                        </div>
                        <div className='include'>
                        Unlimited shares
                        </div>
                        <div className='include'>
                        Normal Support
                        </div>
                        <div className='include'>
                        All analytic features
                        </div>
                        <div className='include'>
                        Unlimited recording
                        </div>
                    </div>
                </div>

                <div className='pricing-card w-8/12 h-12/12 md:border-none border-2 border-green-200 rounded-lg md:shadow-xl bg-white'>
                    <h3 className='w-10/12 flex justify-center lg:justify-start mt-4 mb-10 text-green-600 text-xl text-center lg:m-left m-auto'>Standard Plan</h3>
                    <div className='amount flex text-gray-500 justify-around items-center '>
                        <h2 className='text-2xl md:text-44xl lg:text-4xl font-bold'>$230.99</h2>
                        <h5 className='flex justify-start text-xs lg:text-base lg:pr-4 font-semibold'>Yearly</h5>

                    </div>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto mt-12 grid grid-cols-1'>
                        <div className='include'>
                        Billed monthly
                        </div>
                        <div className='include'>
                        No recurring or hidden charges
                        </div>
                    </div>
                    <div className='morefeatures w-12/12 my-4 flex lg:flex-row text-xs lg:text-sm xl:text-base'>
                    <button className='m-auto lg:w-10/12 w-10/12 h-10 bg-green-600 font-bold rounded-lg text-white'>Get Started</button>
                    </div>
                    <h3 className='cardname mt-6 text-gray-400  text-xl text-center'>Standard plan includes:</h3>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto my-6 grid grid-cols-1 gap-y-3 font-medium'>
                        <div className='include my-4'>
                        Everything in lite plus;
                        </div>
                        <div className='include'>
                        Password Protection
                        </div>
                        <div className='include'>
                        All analytic features
                        </div>
                        <div className='include'>
                        20 team members collaborations
                        </div>
                        <div className='include'>
                        Custom Branding
                        </div>
                        <div className='include'>
                        Priority Customer Service
                        </div>
                        <div className='include'>
                        Roboust integrations
                        </div>
                        <div className='include'>
                        Email and SMS reminders
                        </div>
                    </div>
                </div>
                <div className='pricing-card w-8/12  md:border-none border-2 border-green-200 rounded-lg md:shadow-xl bg-white lg:mt-20'>
                    <h3 className='w-10/12 flex justify-center lg:justify-start mt-4 mb-10 text-green-600 text-xl text-center lg:m-left m-auto'>Premium Plan</h3>
                    <div className='amount flex text-gray-500 justify-around items-center '>
                        <h2 className='text-2xl md:text-44xl lg:text-4xl font-bold'>$110</h2>
                        <h5 className='flex justify-start text-xs lg:text-base lg:pr-4 font-semibold'>Per Month </h5>

                    </div>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto mt-4 grid grid-cols-1'>
                        <div className='include'>
                        Billed monthly
                        </div>
                        <div className='include'>
                        No recurring or hidden charges
                        </div>
                    </div>
                    <div className='morefeatures w-12/12 my-4 flex lg:flex-row text-xs lg:text-sm xl:text-base'>
                    <button className='m-auto border-2 lg:w-10/12 w-10/12 h-10 border-green-600 font-bold rounded-lg text-green-600'>Get Started</button>
                    </div>
                    <h3 className='cardname mt-6 text-gray-400  text-xl text-center'>Premium plan includes:</h3>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto my-6 grid grid-cols-1 gap-y-3'>
                        <div className='include py-4'>
                        Everything in standard plus:
                        </div>
                        <div className='include'>
                        50 team members collaborations
                        </div>
                        <div className='include'>
                        Advanced analytics
                        </div>
                        <div className='include'>
                        Daily performance report
                        </div>
                        <div className='include'>
                        Chat widget
                        </div>
                        <div className='include'>
                        We’ll migrate you for free
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='para-1 w-10/12 m-auto text-gray-400 my-10 lg:my-20 text-center font-medium'>
            You get access to plan features during the 7 day trial, and pay when your free trial is over.
         </div>
         </div>
         <div className='brand flex flex-col m-auto min-h-54'>
            <div className='brandheading m-auto text-2xl md:text-5xl font-sans leading-snug mt-20 font-bold text-gray-600 text-center'>
            <span className='text-green-700'>Project</span><span className='text-yellow-600'>Whiz</span> is trusted by ;
                
            </div>
            
             
            {data.map((img)=>{
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
        <div className='faqs flex flex-col m-auto min-h-54'>
            <div className='brandheading m-auto text-2xl md:text-5xl font-sans leading-snug mt-10 font-bold text-gray-600 text-center '>
            Frequently Asked Questions 
                
            </div>
            <div className='faq w-12/12 flex flex-col items-center justify-center lg:my-10 h-auto'>
                {faq}
               


            </div>


            </div>

         

    </div>
  )
}

export default Pricing