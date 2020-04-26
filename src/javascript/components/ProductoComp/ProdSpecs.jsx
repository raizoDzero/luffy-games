import React from 'react';
import { Tooltip, Icon } from 'antd';

const ProdSpecs = props => {
  const { title, text, tooltip } = props;
  return (
    <div className="prod-specs">
      <h6>
        {title}&nbsp;
        {tooltip && (
          <Tooltip title={tooltip}>
            <Icon type="question-circle-o" />
          </Tooltip>
        )}
      </h6>
      <p>{text}</p>
    </div>
  );
};

export default ProdSpecs;
