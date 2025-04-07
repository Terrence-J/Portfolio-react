import React from 'react';
import { ReactTyped } from 'react-typed'; 

const HeroSection = () => {
  return (
    <div id='home' className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>FULLSTACK DEVELOPER</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>HI I'M SIYABONGA</h1>
        <div className='flex justify-center items-center flex-wrap'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
            Flexible, fast-growing developer for&nbsp;
          </p>
          <ReactTyped
            className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
            strings={['REACT', 'JAVA', 'C++', 'C#', 'JAVASCRIPT', 'TYPESCRIPT']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>
          My expertise in front-end and back-end technologies allows me to build seamless web experiences that leave a lasting
          impression on users.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

