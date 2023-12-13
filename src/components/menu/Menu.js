import React from 'react';

import Products from './Products'
import './menu.css'

function Menu() {

    return (
        <div className="component-container">
            <h2>Nuestro Menu</h2>
            <div className="menu-items">
                <Products
                    name="Hamburguesa"
                    description="#1"
                    price="10.00bs"
                    image={require('../../images/hamburger.png')}
                />
                <Products
                    name="Hamburguesa Doble"
                    description="#2"
                    price="20.00bs"
                    image={require('../../images/hamburger.png')}
                />
                <Products
                    name="Hamburguesa triple"
                    description="#3"
                    price="35.00bs"
                    image={require('../../images/hamburger.png')}
                />
                <Products
                    name="Cafe Helado"
                    description="#4"
                    price="15.00bs"
                    image={require('../../images/icedcoffee.png')}
                />
                <Products
                    name="Te Helado"
                    description="#5"
                    price="35.00bs"
                    image={require('../../images/icedcoffee.png')}
                />
                <Products
                    name="Copa Helada"
                    description="#6"
                    price="27.00bs"
                    image={require('../../images/icedcoffee.png')}
                />
                <Products
                    name="Porcion de papas"
                    description="#7"
                    price="20.00bs"
                    image={require('../../images/fries.png')}
                />
                <Products
                    name="Porcion de Ppapas Escolar"
                    description="#8"
                    price="10.00bs"
                    image={require('../../images/fries.png')}
                />
                <Products
                    name="Porcion Papas grande"
                    description="#9"
                    price="35.00bs"
                    image={require('../../images/fries.png')}
                />
            </div>
        </div>
    )
};

export default Menu;

