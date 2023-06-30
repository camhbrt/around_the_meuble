import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Imagecaroussel from '../components/Imagecaroussel';
import Furnituredetail from '../components/Furnituredetail';
import Carousel from '../components/Carousel';

const Singlefurniturepage = () => {

    //images provenant du dossier "public" (à remplacer avec appel à la BDD)
    const slides = [
        {url: "pioupiou.jpg", title: 'pioupiou'},
        {url: "pioupiou2.jpg", title: 'pioupiou2'},
        {url: "pioupiou3.jpg", title: 'pioupiou3'},
        {url: "pioupiou4.jpg", title: 'pioupiou4'},
    ]

    return (
        <div>
            <Header/>
            <NavLink to='/furnitures'>Retour à la liste des meubles</NavLink>
            <div className='flex'>
                <Furnituredetail/>
                {/* <Imagecaroussel slides={slides}/> */}
                <div className='max-w-lg'>
                <Carousel>
                    {slides.map((s)=>(
                        <img src={s.url}/>
                    ))}
                </Carousel>
            
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Singlefurniturepage;