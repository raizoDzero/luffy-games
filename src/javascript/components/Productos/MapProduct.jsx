import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

// Components
import MockProducts from 'Comp/Productos/MockProducts';

const MapProduct = props => {
  const { currentList } = props;
  return (
    <Row gutter={[25, 20]}>
      {currentList &&
        currentList.length > 0 &&
        currentList.map(element => {
          const {
            id,
            marca,
            modelo,
            type,
            precio,
            images,
            shortMicro,
            disponibles
          } = element;
          return (
            <Link to={'/producto=' + id}>
              <MockProducts
                id={id}
                marca={marca}
                modelo={modelo}
                type={type}
                precio={precio}
                cover={images.cover}
                shortMicro={shortMicro}
                disponibles={disponibles}
              />
            </Link>
          );
        })}
    </Row>
  );
};

export default MapProduct;
