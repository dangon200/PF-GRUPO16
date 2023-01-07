import CardExpertos from 'components/CardExpertos/CardExpertos';
import React from 'react';

import './Expertos.css';

const Expertos = () => {
  return (
    <div className='home_expertos_container'>
        <div className='home_expertos_container-cards'>
            <CardExpertos />
            <CardExpertos />
            <CardExpertos />
        </div>

    </div>
  )
}

export default Expertos