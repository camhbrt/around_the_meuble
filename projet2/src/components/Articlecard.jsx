import React from 'react';

const Articlecard = () => {
    return (
        <div className='bg-slate-400 w-64 m-5 rounded-3xl' >
            <img src="../../public/pioupiou.jpg" alt="fauteuil pioupiou" className='rounded-t-3xl' />
            <div className='mb-5 px-5 p-2' >
                <p>nom du meuble</p>
                <p>prix</p>
                <p>bouton favori</p>
                <p>bouton ajouter au panier</p>
            </div>
        </div>
    );
};

export default Articlecard;