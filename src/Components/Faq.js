import React from 'react';
import { faqdata } from './Data';
import { useState } from 'react';


const Faq = (props) => {
    const [faqbutton, setFaqbutton] = useState(false)
    const [idcheck, setidcheck] = useState(null)

    const faqclick = (e)=>{
        e.preventDefault()
        setFaqbutton(prevfaq => !prevfaq)
        setidcheck(props.id)
    }
    console.log(idcheck);
  return (
    <div className='faq-card w-10/12 h-auto' >
    <div className='faq-q  w-12/12 flex justify-around items-center text-xs md:text-sm lg:text-2xl text-gray-400 font-bold shadow-lg h-16 m-auto mt-8 '>
        <div className='faq-question  w-8/12'>
        {props.question}

        </div>
        <div className='faq-plus  w-1/12 text-center 'onClick={faqclick} >
            +

        </div>
        

    </div>
    <div className={`faq-answer w-10/12 h-auto my-8 text-xs md:text-sm lg:text-base text-gray-400  ${faqbutton ? "" : "hidden"}`} >
        
        {props.answer}
        

    </div>

</div>
  )
}

export default Faq