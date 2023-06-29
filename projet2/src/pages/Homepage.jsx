import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { NavLink } from 'react-router-dom';
import Imagebanner from '../components/Imagebanner';

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