import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import lazaro2 from '../../img/lazaro2.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" ><img className="lazaro" src={lazaro2} alt="Lázaro Logo" /></Link>
        <Link to="/" className="marca"><h1>Concesionaria Lázaro "B"</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/vehiculos">Nuestros Vehículos</Link></li>
            <li><Link className="menu-link" to="/vehiculos/deportivos">Deportivos</Link></li>
            <li><Link className="menu-link" to="/vehiculos/super-deportivos">Super Deportivos</Link></li>
            <li><Link className="menu-link" to="/vehiculos/SUV">SUVs</Link></li>
            <li><Link className="menu-link" to="/vehiculos/pick-up">Pick-Ups</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar