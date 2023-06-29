import React from 'react';
import Favbutton from './Favbutton';
import Addtocartbutton from './Addtocartbutton';

const Articlecard = () => {
    return (
        <div className='w-64 m-5' >
            <img src="../../public/pioupiou.jpg" alt="fauteuil pioupiou" className='rounded-3xl' />
            <div className='mb-5 px-5 p-2 bg-slate-400 rounded-3xl' >
                <p>nom du meuble</p>
                <p>prix</p>
                <Favbutton/>
                <Addtocartbutton/>
            </div>
        </div>
    );
};

export default Articlecard;