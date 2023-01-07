import React from 'react';
import Introduccion from 'pages/Secciones/Introduccion/Introduccion';

import './Home.css';
import Distribuidores from 'pages/Secciones/Distribuidores/Distribuidores';

const Home = () => {
  return (
    <>
        <Introduccion />
        <Distribuidores />
    </>
  )
}

export default Home