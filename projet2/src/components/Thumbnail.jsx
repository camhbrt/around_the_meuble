import React from 'react';

const Thumbnail = ({number}) => {
    return (
        <div className='bg-purple-600 w-12 h-12 m-5 flex-auto'>
            <p>{number}</p>
        </div>
    );
};

export default Thumbnail;