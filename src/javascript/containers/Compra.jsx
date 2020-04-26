import React from 'react';

// Comp
import CompraList from 'Comp/CompraComp/CompraList';
import CompraEnvio from 'Comp/CompraComp/CompraEnvio';
import CompraDom from 'Comp/CompraComp/CompraDom';
import CompraPago from 'Comp/CompraComp/CompraPago';

const Compra = () => {
  return (
    <div className="product-container">
      <CompraList />
      <CompraEnvio />
      <CompraDom />
      <CompraPago />
    </div>
  );
};

export default Compra;
