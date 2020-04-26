import React from 'react';
import { Row, Col, Icon } from 'antd';

// CommonComps
import ButtonMlg from 'CommonComps/ButtonMlg';

// Others
import { priceFormat } from 'Others/otherMethods';

const ProdDetails = props => {
  const { data, comprar, setProductCache } = props;
  const {
    detalles,
    type,
    precio,
    garantia,
    os,
    estetica,
    recomendacion
  } = data;
  return (
    <Row gutter={[0, 6]} className="prod-details">
      <Col sm={24}>
        <ButtonMlg
          onClick={comprar}
          label="Comprar ahora"
          variant="blue"
          size="big"
          icon={<Icon type="shopping" />}
          widthB="280px"
        />
      </Col>
      <Col sm={24}>
        <ButtonMlg
          label="Agregar al carrito"
          variant="yellow"
          size="big"
          onClick={() => setProductCache(true)}
          icon={<Icon type="shopping-cart" />}
          widthB="280px"
        />
      </Col>
      <Col sm={24}>
        <div className="precio-product">{priceFormat(precio)}</div>
      </Col>
      {/* <Col sm={24}>
        <h6>
          Piezas: <InputNumber defaultValue={1} />
        </h6>
      </Col> */}
      <Col sm={8}>
        <h6>
          Garantía: <span>{garantia}</span>
        </h6>
      </Col>
      <Col sm={16}>
        <h6>
          Sistema Operativo: <span>{os}</span>
        </h6>
      </Col>
      <Col sm={24}>
        <h6>
          Estética: <span>{estetica}</span>
        </h6>
      </Col>
      <Col sm={24}>
        <h6>
          Defecto o problema: <span>{detalles}</span>
        </h6>
      </Col>
      <Col sm={24}>
        <h6>
          Recomendado para: <span>{recomendacion}</span>
        </h6>
      </Col>
      {type !== 'normal' && (
        <Col sm={24}>
          <h5>
            Característica especial: <span>{type}</span>
          </h5>
        </Col>
      )}
    </Row>
  );
};

export default ProdDetails;
