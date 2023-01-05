import CardProducto from 'components/CardProducto/CardProducto';
import React from 'react';

import './Ofertas.css';

const Ofertas = () => {
  return (
    <div className='ofertas_container'>
        <div className='ofertas_container-title'>
            <h3>Aprovecha estas ofertas</h3>
        </div>
        <div className='ofertas_container-cards'>
            <CardProducto />
            <CardProducto />
            <CardProducto />
            <CardProducto />
        </div>
    </div>
  )
}

export default Ofertas