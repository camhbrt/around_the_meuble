import React from 'react';
import videoOpeningFurniture from '../assets/videoOpeningFurniture.mp4';

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover'
            src={videoOpeningFurniture}
            autoPlay
            muted
            />
        
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                    <h1 className='text-6xl/[40px]'>Bienvenue chez vous</h1>
                    <section id="section01" class="demo">
                        <h1>Scroll Down Button #1</h1>
                        <a href="#section02"><span></span>Scroll</a>
                    </section>
                </div>
            
            </div>
        </div>
    );
};

export default Hero;