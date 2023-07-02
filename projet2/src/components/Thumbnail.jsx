import React from 'react';

const Thumbnail = ({ card }) => {
  return (
    <>
      <img
        className='w-[500px] object-cover rounded-3xl inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
        src={card.img}
        alt={card.title}
      />
    </>
  );
};

export default Thumbnail;
