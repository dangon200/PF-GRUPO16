import React from 'react';


import './CardExpertos.css'

const CardExpertos = () => {
  return (
    <div className='card_expertos_container'>
        <div className='card_expertos_container-info'>
            <div className='card_expertos_container-img--cnt'> 
                <div className='card_expertos_container-imagen'></div>
            </div>
            <div className='card_expertos_container-title--cnt'>
                <h4>
                    “Comprar aqui es lo mejor que me paso en la vida”
                </h4>
            </div>
            <div className='card_expertos_container-text--cnt'>
                <p>
                    Elon Musk en la revista Caras 2001
                </p>
            </div>
        </div> 
    </div>
  )
}

export default CardExpertos