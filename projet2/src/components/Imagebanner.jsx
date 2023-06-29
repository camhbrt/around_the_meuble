import React from 'react';
import Thumbnail from './Thumbnail';

const Imagebanner = () => {
    const numbers = [1,2,3,4,5];
    return (
        <div className='flex'>
            {numbers.map((number)=> (
                <Thumbnail key={number} number={number}/>
            ))} 
        </div>
    );
};

export default Imagebanner;