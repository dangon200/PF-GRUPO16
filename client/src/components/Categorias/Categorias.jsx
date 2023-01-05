import CardCategoria from 'components/CardCategoria/CardCategoria';
import React from 'react'

import './Categorias.css';

const Categorias = () => {
  return (
    <div className='categorias_container'>
        <div className='categorias_container-title'>
            <h3>Las mejores marcas de: ' '</h3>
        </div>
        <div className='categorias_container-cards'>
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
        </div>
    </div>
  )
}

export default Categorias;