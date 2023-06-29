import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Singlefurniturepage = () => {
    return (
        <div>
            <Header/>
            <h1>Affichage du meuble sur lequel on a cliqué</h1>
            <NavLink to='/furnitures'>clique ici pour revenir en arrière</NavLink>
            <Footer/>
        </div>
    );
};

export default Singlefurniturepage;