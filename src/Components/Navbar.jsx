import React, { useState }  from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

   const [nav, setNav] = useState(true)
  

   const handleNav = () =>{
       setNav(!nav)
   }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Madon.ST</h1>
        <ul className='hidden md:flex'>
  {['Home', 'About', 'Projects'].map((item, i) => {
    const link = `#${item.toLowerCase()}`
    return (
      <li key={i} className='relative group p-4 cursor-pointer'>
        <a href={link} className='text-white'>
          {item}
          <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00df9a] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
    );
  })}
  <li className='p-4 bg-slate-100 text-black rounded hover:bg-[#00df9a] hover:text-white transition duration-300'>
    <a href='#contact'>Contact</a>
  </li>
</ul>



        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />  }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]' }>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Madon.ST</h1>
        
         <ul className='uppercase p-4'>
             <li className='relative group p-4 border-b border-gray-600 cursor-pointer'>
                 <a href='#home' className='text-white'>
                           Home
                       <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00df9a] transition-all duration-300 group-hover:w-full'></span>
                 </a>
             </li>
             <li className='relative group p-4 border-b border-gray-600 cursor-pointer'>
                 <a href='#about' className='text-white'>
                           About
                       <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00df9a] transition-all duration-300 group-hover:w-full'></span>
                 </a>
             </li>
             <li className='relative group p-4 border-b border-gray-600 cursor-pointer'>
                 <a href='#project' className='text-white'>
                           Projects
                       <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00df9a] transition-all duration-300 group-hover:w-full'></span>
                 </a>
             </li>
             <li className='relative group p-4 cursor-pointer'>
                 <a href='#contact' className='text-white'>
                           Contact
                       <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00df9a] transition-all duration-300 group-hover:w-full'></span>
                 </a>
             </li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar