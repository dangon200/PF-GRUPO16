import CardEquipo from 'components/CardEquipo/CardEquipo';
import React from 'react';

import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <div className='sobreNosotros_container'>
        <div className='sobreNosotros_container-title'>
            <h2>Sobre nosotros</h2>
        </div>
        <div className='sobreNosotros_container-text'>
            <p>
                Nuestro proyecto de e-commerce se centra en la venta de todo tipo de transporte que utilice energías renovables, con el objetivo de promover una forma de transporte más sostenible y respetuosa con el medio ambiente.

                Nuestra empresa se basa en la sustentabilidad y la ecología, por lo que todos los productos que ofrecemos son seleccionados cuidadosamente para garantizar que cumplan con estos principios.

                Entre nuestros productos podrás encontrar bicicletas eléctricas, patinetes eléctricos, monopatines eléctricos, vehículos eléctricos y otros medios de transporte ecológicos.

                Además, ofrecemos una amplia gama de accesorios y componentes para que puedas personalizar y mejorar tu vehículo de transporte ecológico.

                Nos esforzamos por ofrecer un servicio excepcional a nuestros clientes, proporcionando información detallada sobre cada producto y brindando asesoramiento para ayudarte a tomar la mejor decisión.
            </p>
        </div>
        <div className='sobreNosotros_container-equipo'>
            <CardEquipo />
            <CardEquipo />
            <CardEquipo />
            <CardEquipo />
        </div>
    </div>
  )
}

export default SobreNosotros