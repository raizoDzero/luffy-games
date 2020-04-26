import React from 'react';

import Why from 'Comp/Contact/Why';
import Carrusel from 'Comp/Contact/Carrusel';

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-text">
        <div>¿QUIENES SOMOS?</div>
        <p>
          Somos una empresa especializada en la distribucion de accesorios 
          y video juegos buscando ofrecer los mejores productos para tus 
          necesidades, al mismo tiempo que te ofrecemos los mejores precios en
          el mercado.
        </p>
      </div>
      <Carrusel />
      <Why />
      <div className="contact-text">
        <div>DISFRUTA DE TUS CONSOLAS AL MAXIMO...</div>
        <p>
          Captura cada momento, Juega y ten siempre todo lo que
          necesitas al alcanze de la palma de tu mano.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
