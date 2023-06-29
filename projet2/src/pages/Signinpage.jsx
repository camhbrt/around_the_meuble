import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Signinpage = () => {
    return (
        <div>
            <Header/>
            <h1>S'inscrire</h1>
            <NavLink to='/login'>déjà un compte ? Connectez-vous</NavLink>
            <Footer/>
        </div>
    );
};

export default Signinpage;