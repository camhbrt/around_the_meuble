import React from 'react';
import Header from '../components/Header';
import Filterbar from '../components/Filterbar';
import Footer from '../components/Footer';

const Gridpage = () => {
    return (
        <div>
            <Header/>
            <Filterbar/>
            <h1 className='text-blue-500'>Et voilà tous nos meubles</h1>
            <Footer/>
        </div>
    );
};

export default Gridpage;