import React from 'react'
import Laptop from '../Assests/laptop.jpg'


const About = () => {

        const handleDownload = () => {
         
          const cvPath = `${process.env.PUBLIC_URL}/Graduate CV_merged (1).pdf`;

          const link = document.createElement('a');
          link.href = cvPath;
    
          link.download = 'Graduate CV.pdf';
      
          link.click();
        };

  return (
    <div id='about' className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' >
           <img className='w-[500px] mx-auto my-4' src={Laptop} alt='lap'/>
           <div className='flex flex-col justify-center'>
            <p className='text-[#00fd9a] font-bold'>/FULL STACK JAVA DEVELOPER/</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>WHAT I DO</h1>
            <p >I am a dedicated and creative web developer with a passion for crafting visually
               stunning and user-friendly websites.1 years of experience in the field,
               I thrive on turning ideas into reality through clean and efficient code.
            </p>
            <button onClick={handleDownload} className= 'text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>READ MORE</button>
           </div>
        </div>
    </div>
  )
 }

export default About