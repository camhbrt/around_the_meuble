import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({children: slides}) => {

    const [curr, setCurr]


    
    return (
        <div className='overflow-hidden relative'>
            <div className='flex'>{slides}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <FaChevronLeft size={40}/>
                </button>
                <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <FaChevronRight size={40}/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;