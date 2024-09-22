import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import carritoDeCompras from '../../img/carritoDeCompras.png';
// import './CartWidget.css';  // Importamos el archivo de estilos

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className="cart-widget-container">
      <Link className="cart-link" to="/carrito">
        <img src={carritoDeCompras} alt="Carrito" className="cart-icon" />
        <span className="cart-text">Carrito</span>
        <span className="cart-number">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;

