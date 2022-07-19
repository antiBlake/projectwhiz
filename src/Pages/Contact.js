import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
                <div className='contact flex  m-auto w-11/12'>
            <div className='hero-1 w-6/12 flex flex-col'>
                <div className='heading1 w-10/12 text-2xl sm:text-3xl md:text-5xl lg:text-7xl  font-sans md:leading-snug mt-10 md:mt-20 font-bold text-gray-600' >
                Contact Us 
                </div>
                <div className='paragraph1 w-10/12 lg:w-10/12 text-sm md:text-base text-gray-400 mt-4 lg:mt-10'>
                We’d love to hear from you. Get in touch with us today.
                </div>
                <div className='paragraph1 w-10/12 lg:w-10/12 text-xs md:text-sm text-gray-400 mt-4 lg:mt-12'>
                Whether you’re curious about our features, free trial,
                or even special offers-we’re ready for all questions
                and we will love to assist immediately.
                </div>

                

            </div>
            <div className='hero-1 w-6/12 mt-10'>
                <img src='images/contact us image.svg' />
                
                </div>

        </div>
        <div className='contact-details flex flex-col m-auto min-h-54'>
            <div className='brandheading m-auto text-xl md:text-4xl font-sans leading-snug mt-20 font-bold text-gray-600 text-center'>
            Leave Us a Message
                
            </div>
            <div className='details grid grid-cols-1 md:grid-cols-2 mt-20 mb-44'>
                <div className='form-details p-4'>
                <div className='contact-form  w-12/12 my-10 flex flex-col gap-4 text-xs lg:text-sm xl:text-base lg:items-center'>
                    <input type='text' placeholder='Your full name' className='w-12/12 lg:w-6/12 h-8 md:h-10 border-2 border-gray-400 rounded-lg placeholder:pl-2 placeholder:text-gray-400'/>
                    <input type='email' placeholder='mail@mail.com' className='w-12/12 lg:w-6/12 h-8 md:h-10 border-2 border-gray-400 rounded-lg placeholder:pl-2 placeholder:text-gray-400'/>
                    <textarea rows='10' placeholder='Your message' className='w-12/12 lg:w-6/12  border-2 border-gray-300 rounded-lg placeholder:pl-2 placeholder:text-gray-400'/>
                    <button  className='w-12/12 lg:w-6/12 h-8 md:h-10 rounded-lg bg-green-500 text-white '>Send</button>

                </div>
                

                </div>
                <div className='map-details text-gray-400 flex flex-col p-4'>
                <div className='c1 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                    <h4 className='mt-8'>6391 Elgin St. Celina, San Fransisco 10299</h4>
                    </div>
                    <div className='c1 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
                    <h4 className='mt-8'>(405) 555-0128</h4>
                    </div>
                    <div className='c1 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                    <h4 className='mt-8'>projectwhiz@example.com</h4>
                    </div>

                </div>

            </div>
            

                




        </div>

    </div>
  )
}

export default Contact