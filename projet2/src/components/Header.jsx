import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-yellow-300'>
            <NavLink to='/'>Home(logo du site)</NavLink>
            <h1 className='text-green-800'>Ceci est le header</h1>
            <NavLink to='/login'>log in</NavLink>

        </div>
    );
};

export default Header;