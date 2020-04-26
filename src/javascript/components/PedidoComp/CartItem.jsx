import React from 'react';
import { Row, Col, InputNumber, Icon } from 'antd';

// CommonComps
import FitImg from 'CommonComps/FitImg';
import ButtonMlg from 'CommonComps/ButtonMlg';

// Others
import { priceFormat } from 'Others/otherMethods';

const CartItem = props => {
  const { item, confirmDelete } = props;
  const { cover, piezas, title, id, precio } = item;
  return (
    <div className="buy-item-container">
      <Row>
        <div className="buy-item-header">{item.title}</div>
        <Col md={6}>
          <FitImg srcImg={cover} estilo="cart-images-big" alt={title} />
        </Col>
        <Col md={6}>
          <div className="col-vertical-align">
            <InputNumber defaultValue={piezas} />
          </div>
        </Col>
        <Col md={6}>
          <div className="col-vertical-align">{priceFormat(precio)}</div>
        </Col>
        <Col md={6}>
          <div className="col-vertical-align">
            <ButtonMlg
              variant="yellow"
              size="mini"
              value={id}
              onClick={() => confirmDelete(id)}
              widthB="26px"
              icon={<Icon type="close" />}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
