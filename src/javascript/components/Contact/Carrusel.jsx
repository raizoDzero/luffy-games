import React from 'react';
import { Carousel } from 'antd';

import c1 from 'Images/contact1.jpg';
import c2 from 'Images/contact2.jpg';
import c3 from 'Images/contact3.jpg';

const Carrusel = () => {
  return (
    <React.Fragment>
      <div className="contact-car">
        <Carousel autoplay effect="fade" dotPosition="left">
          <div>
            <img src={c2} width="360px" alt="vmo" />
          </div>
          <div>
            <img src={c1} width="360px" alt="vmo" />
          </div>
          <div>
            <img src={c3} width="360px" alt="vmo" />
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default Carrusel;
