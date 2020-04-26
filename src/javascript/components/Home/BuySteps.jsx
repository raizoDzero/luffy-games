import React from 'react';

// Other
import { Steps, Icon } from 'antd';

const { Step } = Steps;
const BuySteps = () => {
  return (
    <React.Fragment>
      <h4 className="steps-title">
        En <span>4</span> sencillos pasos
      </h4>
      <Steps>
        <Step
          status="finish"
          title="Elige"
          description="Excelentes opciones disponibles."
          icon={<Icon type="shop" />}
        />
        <Step
          status="finish"
          title="Compra segura"
          icon={<Icon type="safety" />}
          description="Elige débito, crédito, efectivo o a contra-entrega"
        />
        <Step
          status="finish"
          title="Recolección"
          description="¿Donde quieres recibir o recoger tu compra?"
          icon={<Icon type="idcard" />}
        />
        <Step
          status="finish"
          title="Entraga"
          description="Recibe el producto :)"
          icon={<Icon type="inbox" />}
        />
      </Steps>
    </React.Fragment>
  );
};

export default BuySteps;
