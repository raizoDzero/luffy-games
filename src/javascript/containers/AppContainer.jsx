import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componentes
import Productos from 'Cont/Productos';
import Master from 'Cont/Master';
import Home from 'Comp/Home';
import Contact from 'Comp/Contact';
import NavBar from 'Comp/NavBar';
import Footer from 'Comp/Footer';
import ImageExample from 'Comp/ImageExample';
import Producto from 'Cont/Producto';
import Pedido from 'Cont/Pedido';

const AppContainer = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/" component={Home} />
        <Route path="/(producto=[0-9a-zA-Z]*)" component={Producto} />
        <Route exact path="/shelly-store-PROTO" component={Home} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/master" component={Master} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/img" component={ImageExample} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppContainer;
