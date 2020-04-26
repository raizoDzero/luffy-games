import React from 'react';

import { Row, Col, Icon } from 'antd';

// Components
import CartItem from 'Comp/PedidoComp/CartItem';

// CommonComps
import ButtonMlg from 'CommonComps/ButtonMlg';

// Others
import { priceFormat } from 'Others/otherMethods';

const PedidoList = props => {
  const { handleStep, items, confirmDelete, total } = props;

  const suma = total;

  if (!items || items.length === 0) {
    return (
      <h4 style={{ textAlign: 'center', margin: 50 }}>
        No tienes productos en tu carrito
      </h4>
    );
  }
  return (
    <React.Fragment>
      <Row>
        {items.map((item, i) => (
          <CartItem confirmDelete={confirmDelete} key={i} item={item} />
        ))}
      </Row>
      <Row>
        <div className="cart-total-container">
          <Col md={6}>
            <div className="col-vertical-align">Total: </div>
          </Col>
          <Col offset={6} md={6}>
            <div className="col-vertical-align">
              <p>{priceFormat(suma)}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="col-vertical-align">
              <ButtonMlg
                variant={items && items.length > 0 ? 'green' : 'block'}
                size="small"
                widthB="130px"
                label="Confirmar"
                onClick={() => handleStep('next')}
                icon={<Icon type="check" />}
              />
            </div>
          </Col>
        </div>
      </Row>
    </React.Fragment>
  );
};
export default PedidoList;
