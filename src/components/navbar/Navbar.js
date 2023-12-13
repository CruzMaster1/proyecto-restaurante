import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  
  return (
    <>
      <nav>
        <ul>
          <span>
            <img className='navbar-logo' src={require('../../images/retro-logo.png')} alt='logo' ></img>
          </span>
          <li>
            <Link to="/" className='navlink'>Inicio</Link>
          </li>
          <li>
            <Link to="/about" className='navlink'>Acerca de nosotros</Link>
          </li>
          <li>
            <Link to="/menu" className='navlink'>Menu</Link>
          </li>
          <li>
            <Link to="/book" className='navlink'>Reservas</Link>
          </li>
          <li>
            <Link to="/contact" className='navlink'>Contactanos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;