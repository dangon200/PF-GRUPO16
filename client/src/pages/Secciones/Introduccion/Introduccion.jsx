import React from 'react';
import { Link } from 'react-router-dom';


import './Introduccion.css';

const Introduccion = () => {
  return (
    <div className='home_container'>
        <div className='home_container-info'>
            <div className='home_container-info--title'>
                <h1>
                    Eslogan de la marca
                </h1>
            </div>
            <div className='home_container-info--button'>
                <Link 
                    className='home_container-info--link'
                    to='/tienda'
                >
                    <button>
                        Ir a la tienda
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Introduccion