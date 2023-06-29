import React from 'react';
import { NavLink } from 'react-router-dom';
import Loginicon from './Loginicon';
// import Carticon from './Carticon';
import Carticon from './Carticon';

const Header = () => {
    return (
        <div className='bg-yellow-300 flex space-x-24'>
            <NavLink to='/'>Home(logo du site)</NavLink>
            <h1 className='text-green-800'>Around the meuble</h1>
            <NavLink to='/login'><Loginicon/></NavLink>
            {/* <NavLink to='/'><Carticon/></NavLink> */}
            <Carticon/>
            

        </div>
    );
};

export default Header;