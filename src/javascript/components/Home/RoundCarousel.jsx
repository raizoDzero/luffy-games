import React from 'react';
import { Carousel } from 'antd';

import c1 from 'Images/c1.png';
import c2 from 'Images/c2.png';
import c3 from 'Images/c3.png';
import c4 from 'Images/c4.png';

const RoundCarousel = () => {
  return (
    <React.Fragment>
      <div className="border-round">
        <div className="car-cont">
          <Carousel autoplay effect="fade" dotPosition="left">
            <div>
              <img src={c1} width="236px" alt="vmo" />
            </div>
            <div>
              <img src={c2} width="236px" alt="vmo" />
            </div>
            <div>
              <img src={c3} width="236px" alt="vmo" />
            </div>
            <div>
              <img src={c4} width="230px" alt="vmo" />
            </div>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RoundCarousel;
