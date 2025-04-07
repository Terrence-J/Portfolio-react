import React from 'react'
import { GrContactInfo } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoHome } from 'react-icons/io5';
import './Style.css';

const Contact = () => {
  return (
    <div id='contact' className='w-full py-16 text-white px-4'>
       <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2' >
             <h1 className='md:text-4xl ml-24 sm:text-3xl text-2xl font-bold py-2 font-serif'>Interested get in touch with me</h1> 
              <div className='ml-20 mt-10'>
                <ul>
                  <li className='py-2 text-lg flex '><span className='text-2xl font-bold  text-[#00fd9a] mx-4'><GrContactInfo /></span>0660757012</li>
                  <li className='py-2 text-lg flex '><span className='text-2xl font-bold  text-[#00fd9a] mx-4'><MdOutlineAttachEmail /></span>siyabongaterrence0@gmail.com</li>
                  <li className='py-2 text-lg flex '><span className='text-2xl font-bold  text-[#00fd9a] mx-4'><IoHome /></span>4547 Thusi Village Ext 4 <br/> Wesselton <br/>Ermelo <br/> 2350</li>
        
                </ul>
              </div>
          </div>
          <div>
          <div class="form-container">
            <form class="form">
            <div class="form-group">
            <label for="email">Company Email</label>
            <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
          <label for="textarea">Message ?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
              
          </div>
       </div>
    </div>
  )
}

export default Contact