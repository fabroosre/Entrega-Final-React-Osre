import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleEliminar = (id) => {
    eliminarDelCarrito(id);
  };

  return (
    <div className="carrito-container">
      <h1 className="carrito-title">Carrito</h1>

      <div className="carrito-items">
        {carrito.map((vehic) => (
          <div key={vehic.id} className="carrito-item">
            <img src={vehic.imagen} alt={vehic.titulo} className="item-thumbnail" />
            <div className="item-info">
              <h3 className="item-title">{vehic.titulo}</h3>
              <p className="item-price-unit">Precio unit: ${vehic.precio}</p>
              <p className="item-price-total">Precio total: ${vehic.precio * vehic.cantidad}</p>
              <p className="item-quantity">Cantidad: {vehic.cantidad}</p>
            </div>
            <button className="item-remove" onClick={() => handleEliminar(vehic.id)}>
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      {carrito.length > 0 ? (
        <div className="carrito-actions">
          <h2 className="carrito-total">Precio total: ${precioTotal()}</h2>
          <button className="vaciar-btn" onClick={handleVaciar}>Vaciar</button>
          <Link className="checkout-link" to="/checkout">Finalizar compra</Link>
        </div>
      ) : (
        <h2 className="carrito-empty">Su carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;