import React from 'react';
import Header from '../components/Header';
import Filterbar from '../components/Filterbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Furniturespage = () => {
    return (
        <div>
            <Header/>
            <Filterbar/>
            <h1 className='text-blue-500'>Et voilà tous nos meubles</h1>
            <NavLink to='/singlefurniture'>clique ici pour avoir le détail d'un meuble</NavLink>

            <Footer/>
        </div>
    );
};

export default Furniturespage;