import React from 'react';
import Favbutton from './Favbutton';
import Addtocartbutton from './Addtocartbutton';
import { NavLink } from 'react-router-dom';

const Articlecard = () => {
    return (
        <div className='w-64 m-5' >
            <NavLink to='/singlefurniture'><img src="../../public/pioupiou.jpg" alt="fauteuil pioupiou" className='rounded-3xl' /></NavLink>
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