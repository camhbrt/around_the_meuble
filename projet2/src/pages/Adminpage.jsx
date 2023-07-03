import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Backicon from '../components/Backicon';

import { NavLink } from 'react-router-dom';


const Adminpage = () => {
    return (
        <div>
            <Header/>
            <h1>Adminpage</h1>
            <NavLink to='/'><Backicon/></NavLink>
            <Footer/>
        </div>
    );
};

export default Adminpage;
