import React from 'react';
import { Row, Col } from 'antd';

// Others
import { priceFormat } from 'Others/otherMethods';

// CommonComps
import FitImg from 'CommonComps/FitImg';

const MockProducts = props => {
  const { marca, modelo, type, precio, cover, shortMicro, disponibles } = props;
  return (
    <Col align="middle" sm={8}>
      <div className="search-item-container">
        <div className="search-item-header">
          {marca + ' '}
          <span>{modelo}</span>
        </div>
        <Row>
          <Col className="search-item-special" sm={10}>
            {type !== 'normal' && <React.Fragment>{type}</React.Fragment>}
          </Col>
          <Col className="search-item-price" sm={10}>
            {priceFormat(precio)}
          </Col>
        </Row>
        <FitImg
          srcImg={cover}
          estilo="search-item-img-container"
          alt={marca + ' ' + modelo}
        />
        <div className="search-item-belt">{shortMicro}</div>
        <div className="search-item-left">
          Disponibles: <span>{disponibles}</span>
        </div>
      </div>
    </Col>
  );
};

export default MockProducts;
