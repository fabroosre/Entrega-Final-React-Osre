import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ( {vehiculo} ) => {
  return (
    <div className="vehiculo">
        <img src={vehiculo.imagen} alt={vehiculo.titulo} />
        <div>
            <h4>{vehiculo.titulo}</h4>
            <p>Precio: ${vehiculo.precio}</p>
            <p>Categoría: {toCapital(vehiculo.categoria)}</p>
            <Link className="ver-mas" to={`/item/${vehiculo.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item;