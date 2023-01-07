import Categorias from 'components/Categorias/Categorias';
import Ofertas from 'components/Ofertas/Ofertas';
import React from 'react';

import './Tienda.css';

const Tienda = () => {
  return (
    <div className='tienda_container'>
        <div className='tienda_container-info'>
            <Ofertas />
            <Categorias />
            <Categorias />
        </div>
    </div>
  )
}

export default Tienda