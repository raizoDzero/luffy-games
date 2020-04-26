import React, { useState, useEffect } from 'react';
import { Modal, Icon } from 'antd';
// Components
import CartSteps from 'Comp/PedidoComp/CartSteps';
import PedidoList from 'Comp/PedidoComp/PedidoList';
import PedidoEnvio from 'Comp/PedidoComp/PedidoEnvio';
import PedidoDom from 'Comp/PedidoComp/PedidoDom';
import PedidoPago from 'Comp/PedidoComp/PedidoPago';
import PedidoPagoOnline from 'Comp/PedidoComp/PedidoPagoOnline';

// Others
import { findIndexArrayObj } from 'Others/otherMethods';

// Functions
import { urlPedidos, insertOrden } from 'Others/peticiones';

const { confirm } = Modal;

const Pedido = () => {
  const getCart = () => {
    const currentCart = localStorage.getItem('cart');
    if (currentCart) {
      return JSON.parse(currentCart);
    }
    return [];
  };
  const [estado, setEstado] = useState({
    step: 0,
    items: getCart(),
    envioTipo: '',
    correo: '',
    telefono: '',
    nombre: '',
    total: 0,
    estatus: 'prepago',
    apellido: '',
    domicilio: {},
    pagoTipo: '',
    finishStep: false
  });

  const [idPreference, setIdPreference] = useState('');

  useEffect(() => {
    let total = 0;
    estado.items.forEach(element => {
      total += element.precio * element.piezas;
    });
    setEstado({ ...estado, total });
  }, [estado.items]);

  const onNewOrder = () => {
    return insertOrden(urlPedidos, estado);
  };

  const setEnvio = envioTipo => {
    setEstado({ ...estado, envioTipo, step: estado.step + 1 });
  };

  const setPagoType = pagoTipo => {
    setEstado({ ...estado, pagoTipo, step: estado.step + 1 });
  };

  const deleteItem = idString => {
    const { items } = estado;
    const idIndex = findIndexArrayObj(items, { id: idString });
    const currentCart = items;
    currentCart.splice(idIndex, 1); // Elimina 1 elemento del array en el index seleccionado
    localStorage.setItem('cart', JSON.stringify(currentCart));
    setEstado({ ...estado, items: getCart() });
  };

  function confirmDelete(idString) {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <Icon type="exclamation-circle" />,
      content: 'Some descriptions',
      onOk() {
        deleteItem(idString);
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  }

  const handleStep = type => {
    if (type === 'next') {
      setEstado({ ...estado, step: estado.step + 1 });
    } else {
      setEstado({ ...estado, step: estado.step - 1 });
    }
  };

  const handleContactForm = obj => {
    setEstado({ ...estado, ...obj });
  };

  const handleShipmentForm = obj => {
    const { domicilio } = estado;
    const newDomicilio = { ...domicilio, ...obj };
    setEstado({ ...estado, domicilio: newDomicilio });
  };

  // const submitPedido = () => {
  //   onNewOrder().then(data => {
  //     console.log('submitPedido: ', data);
  //   });
  // };

  const mapSteps = () => {
    switch (estado.step) {
      case 0:
        return (
          <PedidoList
            confirmDelete={confirmDelete}
            handleStep={handleStep}
            items={estado.items}
            total={estado.total}
          />
        );
      case 1:
        return <PedidoEnvio setEnvio={setEnvio} handleStep={handleStep} />;
      case 2:
        return (
          <PedidoPago
            envioTipo={estado.envioTipo}
            setPagoType={setPagoType}
            handleStep={handleStep}
          />
        );
      case 3:
        return (
          <PedidoDom
            envioTipo={estado.envioTipo}
            handleContactForm={handleContactForm}
            handleShipmentForm={handleShipmentForm}
            handleStep={handleStep}
            submitPedido={onNewOrder}
            finishStep={estado.finishStep}
            idPref={idPreference}
            setIdPreference={setIdPreference}
          />
        );
      case 4:
        return (
          <PedidoPagoOnline
            idPreference={idPreference}
            total={estado.total}
            handleStep={handleStep}
            handleContactForm={handleContactForm}
          />
        );
      default:
        break;
    }
  };
  return (
    <div className="product-container">
      <CartSteps step={estado.step} />
      {mapSteps()}
    </div>
  );
};

export default Pedido;
