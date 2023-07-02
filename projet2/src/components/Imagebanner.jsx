import React, { useRef } from 'react';
import Thumbnail from './Thumbnail';
import cardList from '../pages/data.js';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Imagebanner = () => {
 
    const slideLeft = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  

  return (

      <div className='relative flex items-center'>
        
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' 
        onClick={slideLeft} size={150}
        />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
        {cardList.map((card, index) => (
          <Thumbnail key={index} card={card} />
        ))}
      </div>

      <MdChevronRight
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideRight} size={150}
      />
    </div>
  );
};

export default Imagebanner;
