import React, { useState, useEffect } from 'react';
import { Row, Col, Icon } from 'antd';

// Components
import BackBttn from 'Comp/PedidoComp/BackBttn';
import ContactForm from 'Comp/PedidoComp/ContactForm';
import ShipmentForm from 'Comp/PedidoComp/ShipmentForm';

// CommonComps
import ButtonMlg from 'CommonComps/ButtonMlg';

const PedidoDom = props => {
  const {
    handleStep,
    handleContactForm,
    handleShipmentForm,
    envioTipo,
    submitPedido,
    finishStep,
    setIdPreference,
    idPref
  } = props;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (finishStep) {
      handleStep('next');
    }
  }, [idPref, finishStep]);

  const onSubmit = () => {
    setLoading(true);
    submitPedido().then(data => {
      const idPreference = Object.values(data)[0];
      console.log('onSubmit: ', data);
      setIdPreference(idPreference);
      handleContactForm({ finishStep: true });
      setLoading(false);
    });
  };

  return (
    <React.Fragment>
      <BackBttn handleStep={handleStep} />
      <ContactForm handleContactForm={handleContactForm} />
      {envioTipo === 'paqueteria' && (
        <ShipmentForm handleShipmentForm={handleShipmentForm} />
      )}
      <Row>
        <Col md={4}>
          <div className="col-vertical-align">
            <ButtonMlg
              variant={loading ? 'block' : 'green'}
              size="default"
              widthB="170px"
              label="Enviar"
              onClick={onSubmit}
              icon={<Icon type="logout" />}
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PedidoDom;
