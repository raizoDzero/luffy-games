import React from 'react';
import { Row, Col, Icon } from 'antd';

// CommonComps
import ButtonMlg from 'CommonComps/ButtonMlg';

const BackBttn = props => {
  const { handleStep } = props;
  return (
    <Row>
      <Col md={4}>
        <div className="col-vertical-align">
          <ButtonMlg
            variant="yellow"
            size="small"
            onClick={handleStep}
            widthB="130px"
            label="Atrás"
            icon={<Icon type="backward" />}
          />
        </div>
      </Col>
    </Row>
  );
};

export default BackBttn;
