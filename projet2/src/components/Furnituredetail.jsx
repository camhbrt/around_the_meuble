import React from 'react';

const Furnituredetail = () => {
    return (
        <div className='bg-slate-300 m-5 rounded-xl p-5 flex-auto'>
            <h1>Nom du meuble</h1>
            <p>Description du meuble</p>
            <ul>
                <li>dimensions</li>
                <li>matières</li>
                <li>couleurs</li>
            </ul>
            <h2>prix</h2>
        </div>
    );
};

export default Furnituredetail;