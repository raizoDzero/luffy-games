import React from 'react';
import { Link } from 'react-router-dom';

// Components
import RoundCarousel from 'Comp/Home/RoundCarousel';
import BuySteps from 'Comp/Home/BuySteps';
import ButtonProd from 'Comp/Home/ButtonProd';

const Home = () => {
  return (
    <React.Fragment>
      <div className="h-title">
        Luffy <span>Game's</span>
      </div>
      <p>
        Ofrecemos todo tipo de accesorios y juegos para tu <span>Consola</span> al mejor
        precio <Link to="/master">aquí</Link>
      </p>
      <RoundCarousel />
      <div className="home-container">
        <p>
          En Luffy Game's <span>queremos</span> darte el mejor servicio y los mejores productos
          por el menor precio, poniendo ante todo la <span>calidad</span> y precio
          para cualquier tipo de consola.
          <br />
          <br />
          No lo hacemos por dinero, lo hacemos por la satisfacción de que las
          personas tengan productos de <span>calidad </span> y  
          funcionales para lo que necesitan a un <span>precio justo</span>
        </p>
        <br />
        <BuySteps />
        <ButtonProd />
      </div>
    </React.Fragment>
  );
};

export default Home;
