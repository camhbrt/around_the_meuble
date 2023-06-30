import React from 'react';
import { NavLink } from 'react-router-dom';

const Loginform = () => {
    return (
        <div>
            <form action="">
                    <div className='mb-3'>
                        <img src="" alt="Profile picture" />
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>User Name </label>
                        <input type="text" placeholder='Enter your User Name' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Password </label>
                        <input type="text" placeholder='Enter your Password' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='flex justify-between mb-6'>
                        <label>
                            <input type="checkbox"/>
                            Remember Me
                        </label>
                        <span>Forgot Password?</span>
                    </div> 
                    <button className='block bg-gray-700 hover:bg-gray-800 text-white w-full py-2 px-8 rounded  '>Sign In</button>
                    <div className='mt-4 text-center'>
                        <NavLink to='/signin'>
                            Don't have an account yet? 
                            <span className='text-blue-700 cursor-pointer'> Sign Up</span>
                        </NavLink>
                    </div>
                
            </form>
        </div>
    );
};

export default Loginform;