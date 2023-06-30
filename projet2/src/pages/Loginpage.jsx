import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/Loginform';
import Loginbg from '../assets/Loginbg.jpg'

const Loginpage = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-col flex-auto w-full h-screen">
                <div className="h-full">
                    <div className='grid lg:grid-cols-3 h-full'>
                        <div className='bg-rose-100 bg-cover bg-no-repeat mt-7' style={{backgroundImage: `url(${Loginbg})`}}>
                            <div className='col-span-2 flex justify-center item-center'>
                                <div className='min-w-[450px] px-8'>
                                    <div className='mb-12'>
                                        <h2 className='text-3xl font-medium'>Welcome Back!</h2>
                                        <p>Please enter your credentials to Sign In</p>
                                    </div>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Loginpage;