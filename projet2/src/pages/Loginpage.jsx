import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Loginpage = () => {
    return (
        <div>
            <Header/>
            <h1>log in page</h1>
            <NavLink to='/signin'>pas de compte ? Inscrivez-vous</NavLink>
            <Footer/>
        </div>
    );
};

export default Loginpage;