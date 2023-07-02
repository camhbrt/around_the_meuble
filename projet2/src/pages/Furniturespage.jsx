import React from 'react';
import Header from '../components/Header';
import Filterbar from '../components/Filterbar';
import Articlecard from '../components/Articlecard';
import Footer from '../components/Footer';

const Furniturespage = () => {
    return (
        <div>
            <Header/>
            <Filterbar/>
            <h1 className='text-blue-500'>Et voilà tous nos meubles</h1>
            
            <div className="flex justify-center items-center h-full">
                        <div className="bg-gray-200 p-2 justify-center">
                            <Articlecard />
                        </div>
            
            </div>

            <Footer/>
        </div>
    );
};

export default Furniturespage;