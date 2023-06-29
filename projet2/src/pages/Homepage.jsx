import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Imagebanner from '../components/Imagebanner';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
        <Header/>
        <Hero/>
        <NavLink to='/furnitures'>Voir tous les meubles</NavLink>
        <Imagebanner/>
        <Footer/>
            
        </div>
    );
};

export default Homepage;