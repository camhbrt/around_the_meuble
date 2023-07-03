import React from 'react';

const Subscriptionform = () => {
    return (
        <div>
            <form action="">
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>User Name </label>
                        <input type="text" placeholder='Enter your User Name' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Password </label>
                        <input type="text" placeholder='Enter your Password' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Confirm Password </label>
                        <input type="text" placeholder='Confirm your Password' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='flex justify-between mb-6'>
                        <label>
                            <input type="checkbox"/>
                             I accept the <span className='text-blue-700 cursor-pointer'>Terms of Use</span> & <span className='text-blue-700 cursor-pointer'> Privacy Policy</span>
                        </label>
                    </div> 
                    <button className='block bg-gray-700 hover:bg-gray-800 text-white w-full py-2 px-8 rounded  '>Register Now</button>
            </form>
        </div>
    );
};

export default Subscriptionform;