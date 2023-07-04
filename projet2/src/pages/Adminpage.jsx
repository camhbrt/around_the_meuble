import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Backicon from '../components/Backicon';
import TableauAdmin from '../components/TableauAdmin';

import { NavLink } from 'react-router-dom';


const Adminpage = () => {
    return (
        <div>
            <Header/>
            <h1>Adminpage</h1>
           <TableauAdmin/>
            <NavLink to='/'><Backicon/></NavLink>
            <Footer/>
        </div>
    );
};

export default Adminpage;
