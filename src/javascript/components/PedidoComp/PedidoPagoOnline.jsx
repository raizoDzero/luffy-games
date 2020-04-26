import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
// npm install --save dangerously-set-html-content
import InnerHTML from 'dangerously-set-html-content';

// Components
import BackBttn from 'Comp/PedidoComp/BackBttn';

// Other methods
import { priceFormat } from 'Others/otherMethods';

const PedidoPagoOnline = props => {
  const { handleStep, idPreference, total, handleContactForm } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleContactForm({ finishStep: false });
  }, []);

  const preferenceID = '"' + idPreference + '"';
  const html =
    `
    <form action="/procesar-pago" method="POST">
    <script
     src="https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js"
     data-preference-id=` +
    preferenceID +
    `>
    </script>
    </form>
  `;
  console.log(preferenceID);
  const findPayBttn = () => {
    const periodicCHeck = setInterval(() => {
      const payBttn = document.getElementsByClassName('mercadopago-button')[0];
      if (payBttn) {
        setLoading(false);
        clearInterval(periodicCHeck);
      }
    }, 500);
  };

  return (
    <React.Fragment>
      {findPayBttn()}
      <BackBttn handleStep={handleStep} />
      <div className="pay-card">
        <p>
          Estas a <span>un pasó</span> de completar la lista de navidad...
        </p>
        <hr />
        <h5>
          Total: <span>{priceFormat(total)}</span>
        </h5>

        {loading && (
          <div className="example">
            <Spin />
          </div>
        )}
        <InnerHTML html={html} />
        <h4>Débito, crédito, efectivo y más...</h4>
      </div>
    </React.Fragment>
  );
};

export default PedidoPagoOnline;
