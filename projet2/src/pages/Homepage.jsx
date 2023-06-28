import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1 className='text-blue-400'>coucou</h1>
        <Header/>
        <Hero/>
        <NavLink to='/furnitures'>Voir tous les meubles</NavLink>
        <Footer/>
            
        </div>
    );
};

export default Homepage;