import React from 'react';
import { useState, useEffect } from 'react';

import './about.css';

function About() {

    const [infoAbout, setInfoAbout] = useState('Aprete un boton para obtener mi informacion')

    useEffect(() => {

        return () => {
            console.log('return from resource change')
        }
    }, [infoAbout])

    return (
        <div className='component-container'>
            <h2>Acerca de nosotros</h2>
            <p>Somos un Servicio confiable desde 1990!</p>
            <p>Mi informacion</p>
            <div>
                <button onClick={() => setInfoAbout('Juan Daniel Cruz Suntura')}>Nombre</button>
                <button onClick={() => setInfoAbout('dannycruz@email.com')}>Correo</button>
                <button onClick={() => setInfoAbout('67331887')}>Telefono</button>
                
                <button onClick={() => setInfoAbout('9920192')}>CI</button>
                <button onClick={() => setInfoAbout('Dra. Marisol Tellez')}>Docente</button>
                <button onClick={() => setInfoAbout('INF-122 Par"A"')}>Materia</button>
            </div>
            <p className='infoAbout'>{infoAbout}</p>
            <img className='about-img' src={require('../../images/burgergif.gif')} alt='burger-img'></img>
        </div>
    )

};

export default About;