import React from 'react';

// Other
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

// CommonComps
import ButtonMlg from 'CommonComps/ButtonMlg';

const ButtonProd = () => {
  return (
    <Link to="/productos">
      <div className="center-block">
        <ButtonMlg
          label="Ver catálogo ahora"
          variant="purple"
          size="default"
          widthB="220px"
          icon={<Icon type="shopping" />}
        />
      </div>
    </Link>
  );
};

export default ButtonProd;
