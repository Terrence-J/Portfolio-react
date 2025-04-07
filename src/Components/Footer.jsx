import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
     <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
        <p>A dynamic and responsive portfolio built with React, showcasing a range of projects and skills.
          Features include an interactive user interface, seamless navigation, and a sleek design. Highlights
           professional achievements, coding proficiency, and creative problem-solving abilities. Integrated with
            modern web technologies and optimized for performance.  </p>
         <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
         </div>
     </div>
       <div className='lg:col-span-2 flex justify-between'>
    <div>
       <h6 className='font-medium text-gray-300'>Contact Me</h6>
       <ul>
          <li className='py-2 text-sm'>0660757012</li>
          <li className='py-2 text-sm'>siyabongaterrence0@gmail.com</li>
          <li className='py-2 text-sm'>Github repo: <a href='https://github.com/Terrence-J?tab=repositories'>https://github.com/Terrence-J?tab=repositories</a> </li>
          <li className='py-2 text-sm'>linkin Profile: www.linkedin.com/in/st-madonsela</li>
       </ul>
    </div>

    <div>
       <h6 className='font-medium text-gray-300'>Solutions</h6>
       <ul>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Marketing</li>
          <li className='py-2 text-sm'>Entrepreneurship</li>
          <li className='py-2 text-sm'>e-commerce website</li>
       </ul>
    </div>
   
       </div>
    </div>
  )
}

export default Footer