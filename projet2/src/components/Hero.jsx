import React from 'react';
import videoOpeningFurniture from '../assets/videoOpeningFurniture.mp4';
import ScrollButton from './ScrollButton';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={videoOpeningFurniture} autoPlay muted />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className='text-6xl/[40px]'>Bienvenue chez vous</h1>
      </div>
      <div className='absolute bottom-5 right-7 z-50'>
          <ScrollButton />
      </div>
    </div>
  );
};

export default Hero;
