/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Skeleton, Modal } from 'antd';
import { withRouter } from 'react-router-dom';

// Comp
import ProductImages from 'Comp/ProductoComp/ProductImages';
import ProdDetails from 'Comp/ProductoComp/ProdDetails';
import ProdSpecs from 'Comp/ProductoComp/ProdSpecs';

// Others
import { copyToEnd, findIndexArrayObj } from 'Others/otherMethods';

// Functions
import { getProduct, urlProduct } from 'Others/peticiones';
// import servicesData from 'Others/servicesData.json';

const Producto = withRouter(props => {
  const [product, setProduct] = useState(null);
  function countDownModal(titulo, mensaje) {
    const secondsToGo = 2;
    const modal = Modal.success({
      title: titulo,
      content: mensaje
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const onGetData = () => {
    const current = props.location.pathname;
    const id = copyToEnd(current, 10);
    getProduct(urlProduct, id).then(data => {
      setProduct(data);
    });
  };

  const setProductCache = showModals => {
    let currentCart = localStorage.getItem('cart');
    const { images, marca, modelo, disponibles, id, precio } = product;
    const item = {
      title: marca + ' ' + modelo,
      piezas: 1,
      cover: images.cover,
      disponibles,
      id,
      precio
    };
    if (currentCart) {
      currentCart = JSON.parse(currentCart);
      const repeated = findIndexArrayObj(currentCart, { id });

      // si no está repetido el producto
      if (repeated === -1) {
        currentCart.push(item);
        localStorage.setItem('cart', JSON.stringify(currentCart));
        if (showModals) {
          const mensaje = 'Agregaste ' + item.title + ' al carrito :)';
          countDownModal('Exito', mensaje);
        }
      } else if (showModals) {
        const mensaje = 'Éste producto ya se encuentra en el carrito :)';
        countDownModal('Repetido', mensaje);
      }
    } else {
      currentCart = [item];
      console.log('cart local storage: ', currentCart);
      localStorage.setItem('cart', JSON.stringify(currentCart));
    }
  };

  const comprar = () => {
    const { history } = props;
    setProductCache(false);
    history.push('/pedido');
  };

  useEffect(() => {
    onGetData();
  }, []);

  if (!product) {
    return (
      <Card style={{ width: '90%' }}>
        <Skeleton active />
      </Card>
    );
  }
  return (
    <div className="product-container">
      <h4>
        {product.marca} <span>{product.modelo}</span>
      </h4>
      <Row>
        <Col xl={12} allign="middle">
          <ProductImages
            images={product.images}
            title={product.marca + ' ' + product.modelo}
          />
        </Col>
        <Col xl={12} allign="middle">
          <ProdDetails
            comprar={comprar}
            data={product}
            setProductCache={setProductCache}
          />
        </Col>
      </Row>
      <Row>
        <Card className="specs-card">
          <Row>
            <Col xl={11}>
              <ProdSpecs
                title="Características de rendimiento "
                tooltip="La velocidad y rendimiento de tu equipo depende de éstas características"
                text={product.rendimiento}
              />
            </Col>
            <Col xl={11}>
              <ProdSpecs
                title="Características generales"
                text={product.specs}
              />
            </Col>
            <Col xl={11}>
              <ProdSpecs title="Puertos" text={product.ports} />
            </Col>
            <Col xl={11}>
              {' '}
              {product.special && product.special !== '' && (
                <ProdSpecs
                  title="Características especiales"
                  tooltip="Algunas características sobresalientes acerca de éste equipo"
                  text={product.special}
                />
              )}
            </Col>
          </Row>
          <Row>
            <br />
            <hr />
            <br />
            <p>
              ¿Tienes dudas o necesitas orientación? Mensaje{' '}
              <a href="https://www.facebook.com/">aquí :D</a>
            </p>
          </Row>
        </Card>
      </Row>
    </div>
  );
});

export default Producto;
