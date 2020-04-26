/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// Other
import { Tabs, Icon } from 'antd';

// Components
import MapProduct from 'Comp/Productos/MapProduct';
import LoadProducts from 'Comp/Productos/LoadProducts';

// Functions
import { getAllProducts, urlProduct } from 'Others/peticiones';

const { TabPane } = Tabs;

const Productos = () => {
  const [currentList, setCurrentList] = useState([]);
  const onClientGetAll = () => {
    getAllProducts(urlProduct).then(data => {
      setCurrentList(data);
    });
  };

  useEffect(() => {
    onClientGetAll();
  }, []);

  const callback = key => {
    console.log(key);
  };
  return (
    <div className="product-cont">
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane
          tab={
            <span>
              <Icon type="deployment-unit" />
              Todos
            </span>
          }
          key="2"
        >
          {currentList && currentList.length > 0 && (
            <MapProduct currentList={currentList} />
          )}
          {!currentList || (currentList.length === 0 && <LoadProducts />)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Productos;
