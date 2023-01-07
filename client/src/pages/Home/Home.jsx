import React from 'react';
import Introduccion from 'pages/Secciones/Introduccion/Introduccion';
import Distribuidores from 'pages/Secciones/Distribuidores/Distribuidores';
import Mision from 'pages/Secciones/Mision/Mision';

import './Home.css';

const Home = () => {
  return (
    <>
        <Introduccion />
        <Distribuidores />
        <Mision />
    </>
  )
}

export default Home