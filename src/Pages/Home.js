import React from 'react'
import data, {faqdata} from '../Components/Data'
import Faq from '../Components/Faq'

const Home = () => {
    const faq = faqdata.map(item=>{
        return(
            <Faq key={item.id} {...item}/>
        )
    })
  return (
    <div className='home w-12/12 h-auto ' >
        <div className='hero flex  m-auto w-11/12'>
            <div className='hero-1 w-6/12 flex flex-col'>
                <div className='heading1 w-10/12 text-2xl sm:text-3xl md:text-5xl lg:text-7xl  font-sans md:leading-snug mt-10 md:mt-20 font-bold text-gray-600' >
                Deliver Projects On Time with <span className='text-green-700'>Project</span><span className='text-yellow-600'>Whiz</span>
                </div>
                <div className='paragraph1 lg:w-10/12 text-xs mt-5 lg:mt-10 md:text-2xl lg:leading-8 text-gray-600'>
                Let’s help you plan projects, collaborate with teammates, align goals, and organize tasks. All these on a <span className='text-yellow-600'>BUDGET.</span>

                </div>
                <div className='newsletter w-12/12 my-10 flex lg:flex-row flex-col gap-4 text-xs lg:text-sm xl:text-base'>
                    <input type='text' placeholder='Enter your Email here' className='w-12/12 lg:w-6/12 h-8 md:h-10 border-2 rounded-lg p-4 text-gray-600'/>
                    <button className='w-12/12 lg:w-4/12 h-8 md:h-10 rounded-lg bg-green-500 text-white lg:ml-4'>Get Started for Free</button>

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
        <div className='reasons flex flex-col m-auto min-h-54'>
            <div className='m-auto text-2xl md:text-5xl font-sans leading-snug mt-20 font-bold text-gray-600 text-center'>
            Why you need <span className='text-green-700'>Project</span><span className='text-yellow-600'>Whiz</span>

            </div>
            <div className='reason grid grid-cols-1 justify-items-center lg:grid lg:grid-cols-2 mt-10 '>
                <div className='reason1 mt-10 lg:mt-20 w-10/12'>
                    <div className='head  text-green-700 text-xl lg:text-5xl font-bold text-center md:text-left'>
                    Collaborate with teammates
                    </div>
                    <div className='paragraph1 lg:w-10/12 text-sm mt-5 lg:mt-10 md:text-2xl lg:leading-8 text-gray-400'>
                    Collaborate with teammates and beat deadlines with our efficent team messaging software and quick file sharing feature.
                    </div>
                    <div className='collabbutton w-12/12 my-10 flex lg:flex-row flex-col gap-4 text-xs lg:text-sm xl:text-base'>
                    <button className='w-12/12  lg:m-left md:m-left lg:w-6/12 h-10  rounded-lg bg-green-500 text-white'>Get Started for Free</button>
                    </div>
                    

                </div>
                <div className='reasonillustration w-10/12 hidden lg:block'>
                    <img src='images/Collaborate illustration.svg' />
                </div>
                <div className='reasonillustration w-10/12 hidden lg:block'>
                    <img src='images/Manage Projects illustration.svg' />
                </div>
                <div className='reason1 mt-10 lg:mt-20 w-10/12'>
                    <div className='head  text-green-700 text-xl lg:text-5xl font-bold text-center md:text-left'>
                    Manage project budget
                    </div>
                    <div className='paragraph1 lg:w-10/12 text-sm mt-5 lg:mt-10 md:text-2xl lg:leading-8 text-gray-400'>
                    Get finance reports and track your expenses as a team, while receiving quick and clear report on budget performance.
                    </div>
                    <div className='collabbutton w-12/12 my-10 flex lg:flex-row flex-col gap-4 text-xs lg:text-sm xl:text-base lg:justify-end lg:pr-6'>
                    <button className='w-12/12  lg:w-6/12 h-10  rounded-lg bg-green-500 text-white'>Get Started for Free</button>
                    </div>
                    

                </div>

                <div className='reason1 mt-10 lg:mt-20 w-10/12'>
                    <div className='head  text-green-700 text-xl lg:text-5xl font-bold text-center md:text-left'>
                    All-in-one place documentation
                    </div>
                    <div className='paragraph1 lg:w-10/12 text-sm mt-5 lg:mt-10 md:text-2xl lg:leading-8 text-gray-400'>
                    Easy access to your data with our all-in-one documentation feature, shareable with just a few clicks!
                    </div>
                    <div className='collabbutton w-12/12 my-10 flex lg:flex-row flex-col gap-4 text-xs lg:text-sm xl:text-base'>
                    <button className='w-12/12  lg:m-left md:m-left lg:w-6/12 h-10  rounded-lg bg-green-500 text-white'>Get Started for Free</button>
                    </div>
                    

                </div>
                <div className='reasonillustration w-10/12 hidden lg:block'>
                    <img src='images/Resource mgt illustration.svg' />
                </div>

            </div>
            <div className='morefeatures w-12/12 my-10 flex lg:flex-row flex-col gap-4 text-xs lg:text-sm xl:text-base'>
                    <button className='w-4/12 lg:w-2/12 m-auto border-2 lg:m-left md:m-left lg:w-6/12 h-10 border-green-600 font-bold rounded-lg text-green-600 '>See More Features</button>
                    </div>



        </div>
        <div className='testimonials py-12 flex flex-col items-center '>
            <div className='w-10/12 h-auto testimonial grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

                <div className='card lg:w-7/12 flex flex-col mt-10 items-center'>
                    <div className='cardimg w-12/12 h-12/12  '>
                        <img src='/images/Ellipse 1.svg' />
                        </div>
                        <div className='p mt-4 w-8/12 text-left text-gray-400 font-medium'> “Using ProjectWhiz has made working with teammates easier and collaborative”</div>
                        <h3 className='cardname mt-6 text-gray-400 font-bold text-xl'>Olivia McCoy</h3>
                        <h5 className='cardtitle mt-4 text-xs text-gray-400' >Project Head, General Electric.</h5>

                </div>
                <div className='card lg:w-7/12 flex flex-col mt-10 items-center'>
                    <div className='cardimgw-12/12 h-12/12 '>
                        <img src='/images/Ellipse 2.svg' />
                        </div>
                        <div className='p mt-4 w-8/12 text-left text-gray-400 font-medium'> “My teammates and I all look forward to work time, because its all so easy now”</div>
                        <h3 className='cardname mt-8 text-gray-400 font-bold text-xl'>Raymond Benson</h3>
                        <h5 className='cardtitle mt-4 text-xs text-gray-400' >Financial Planner, IBM.</h5>

                </div>

                <div className='card lg:w-7/12 flex flex-col mt-10 items-center '>
                    <div className='cardimg w-12/12 h-12/12 '>
                        <img src='/images/Ellipse 3.svg' />
                        </div>
                        <div className='p mt-4 w-8/12 text-left text-gray-400 font-medium'> “I like ProjectWhiz more because of it’s seamless and efficent documentation feature”</div>
                        <h3 className='cardname mt-2 text-gray-400 font-bold text-xl'>Janetta Shin</h3>
                        <h5 className='cardtitle mt-4 text-xs text-gray-400' >Industry Representative, Nintendo.</h5>

                </div>


            </div>

                    <button className='w-8/12 md:w-4/12 mt-10 lg:w-2/12 m-auto lg:m-left md:m-left lg:w-6/12 h-10 bg-green-500 font-bold rounded-lg text-white '>Get Started for Free</button>

            
            
        </div>
        <div className='pricing flex flex-col m-auto min-h-54'>
            <div className='brandheading m-auto text-2xl md:text-5xl font-sans leading-snug mt-20 font-bold text-gray-600 text-center'>
            Our Pricing Plans 
                
            </div>
            <div className='pricingcards grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8 mt-12'>
                <div className='pricing-card w-8/12 h-12/12 md:border-none border-2 border-green-200 rounded-lg md:shadow-xl'>
                    <h3 className='w-10/12 flex justify-center lg:justify-start mt-4 mb-10 text-green-600 font-bold text-2xl text-center lg:m-left m-auto'>Standard Plan</h3>
                    <div className='amount flex text-gray-500 justify-around items-center '>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>$230.99</h2>
                        <h5 className='flex justify-start text-xs lg:text-base font-medium'>Yearly </h5>

                    </div>
                    <div className='morefeatures w-12/12 my-10 flex lg:flex-row text-xs lg:text-sm xl:text-base'>
                    <button className='m-auto border-2 lg:w-10/12 w-10/12 h-10 border-green-600 font-bold rounded-lg text-green-600'>Try 7days for free</button>
                    </div>
                    <h3 className='cardname mt-6 text-gray-400 font-bold text-xl text-center'>Standard plan includes:</h3>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto my-6 grid grid-cols-1'>
                        <div className='include'>
                        20+ team members collaborations
                        </div>
                        <div className='include'>
                        Customer Support
                        </div>
                        <div className='include'>
                        Email and SMS reminders
                        </div>
                    </div>
                    <div className='w-12/12 flex justify-center items-center h-10 rounded-lg bg-green-200 text-white'>
                    See More Features
                    </div>

                </div>
                <div className='pricing-card w-8/12 h-12/12 md:border-none border-2 border-green-200 rounded-lg md:shadow-xl'>
                    <h3 className='w-10/12 flex justify-center lg:justify-start mt-4 mb-10 text-green-600 font-bold text-2xl text-center lg:m-left m-auto'>Premium Plan</h3>
                    <div className='amount flex text-gray-500 justify-around items-center '>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>$110.99</h2>
                        <h5 className='flex justify-start text-xs lg:text-base font-medium'>Per Month </h5>

                    </div>
                    <div className='morefeatures w-12/12 my-10 flex lg:flex-row text-xs lg:text-sm xl:text-base'>
                    <button className='m-auto border-2 lg:w-10/12 w-10/12 h-10 border-green-600 font-bold rounded-lg text-green-600'>Get Started</button>
                    </div>
                    <h3 className='cardname mt-6 text-gray-400 font-bold text-xl text-center'>Standard plan includes:</h3>
                    <div className='includes text-gray-400 text-xs md:text-sm w-10/12 m-auto my-6 grid grid-cols-1'>
                        <div className='include'>
                        20+ team members collaborations
                        </div>
                        <div className='include'>
                        Customer Support
                        </div>
                        <div className='include'>
                        Email and SMS reminders
                        </div>
                    </div>
                    <div className='w-12/12 flex justify-center items-center h-10 rounded-lg bg-green-200 text-white'>
                    Get Started for Free
                    </div>

                </div>
                
            </div>
            <div className='morefeatures w-12/12 my-10 lg:my-20 flex lg:flex-row flex-col gap-4 text-xs lg:text-sm xl:text-base '>
                    <button className='w-6/12 lg:w-3/12 m-auto lg:m-left md:m-left lg:w-6/12 h-10 bg-green-600 font-bold rounded-lg text-white '>See More Plans</button>
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

export default Home