import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Articlecard from '../components/Articlecard';
import Pioupiou from '/public/images/pioupiou.jpg';

import { NavLink } from 'react-router-dom';

const Singlefurniturepage = () => {
    return (
        <div>
            <Header/>
            <h1>Affichage du meuble sur lequel on a cliqué</h1>

            <div className="grid justify-center items-center h-screen">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${Pioupiou})`}} title="Fauteuil pioupiou">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>

          Members only
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">
        <Articlecard/>
        </div>
        <p className="text-gray-700 text-base">
          Son histoire (description)
        </p>
      </div>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src={Pioupiou} alt="Fauteuil pioupiou"/>
        <div className="text-sm">
          <p className="text-gray-900 leading-none">
            Marque
          </p>
          <p className="text-gray-900 leading-none">
            Prix
          </p>
          <p className="text-gray-600">Date de publication</p>
        </div>
      </div>
    </div>
  </div>
</div>



            <NavLink to='/furnitures'>clique ici pour revenir en arrière</NavLink>
            <Footer/>
        </div>
    );
};

export default Singlefurniturepage;