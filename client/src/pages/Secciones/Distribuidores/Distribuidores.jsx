import React from 'react';

import './Distribuidores.css';

const Distribuidores = () => {
  return (
    <div className='home_dist_container'>
        <div className='home_dist_container-info'>
            <div className='home_dist_container-info--title'>
                <h2>Empresas que confian en nosotros</h2>
            </div>
            <div className='home_dist_container-info--company'>
                <div className='company-cards'>
                    {/* AQUI VA LA LOGICA DEL CARRUSEL */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Distribuidores