import React from 'react';
import { Link } from 'react-router-dom';

// Other
// import { Card, Button } from 'antd';

const MasterBar = props => {
  const { onLogout } = props;
  const current = '/productos';
  return (
    <div className="nav-div">
      <div className="to-home">
        Luffy <span>Game's</span>
      </div>
      <div className="nav-buttons">
        <div
          className={
            current === '/productos' ? 'nav-btn nav-border' : 'nav-btn'
          }
        >
          Productos
        </div>

        <Link onClick={onLogout} to="/">
          <div
            className={
              current === '/contacto' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Salir
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MasterBar;
