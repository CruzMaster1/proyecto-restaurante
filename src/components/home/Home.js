import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

function Home() {

    let navigate = useNavigate();

    return (
        <div className='home-container'>
            <div>
                <h1 className='home-title'>Retro Restaurant</h1>
                <p>Una experiencia que recordaras!!</p>
                <button className='home-button' onClick={() => { navigate("/menu"); }}>Menu</button>
                <button className='home-button' onClick={() => { navigate("/book"); }}>Libro</button>
            </div>
            <div>
                <img className='home-img' src={require('../../images/dining.jpg')} alt='dining-img'></img>
                <button className='mobile-btn' onClick={() => { navigate("/menu"); }}>Menu</button>
                <button className='mobile-btn' onClick={() => { navigate("/book"); }}>reservas</button>
            </div>
        </div>
    )
};

export default Home;