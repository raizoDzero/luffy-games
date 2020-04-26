import React, { useState } from 'react';

// Other
import { Button, Tabs, Icon } from 'antd';

// Comp
import NewProduct from 'Comp/Master/MasterProducts/NewProduct';
import MasterListProduct from 'Comp/Master/MasterProducts/MasterListProduct';

const { TabPane } = Tabs;

const MasterProducts = props => {
  const [newP, setNewP] = useState(false);
  const onShowForm = () => {
    setNewP(!newP);
  };
  const callback = key => {
    console.log(key);
  };
  const {
    updateForm,
    onNewProduct,
    onUpdateAll,
    currentList,
    formMaster,
    onOpenEditProduct,
    onDeleteP
  } = props;
  return (
    <div className="master-prod-cont">
      <Button onClick={onShowForm} block icon="plus">
        Agregar producto
      </Button>
      <NewProduct
        updateForm={updateForm}
        onNewProduct={onNewProduct}
        newP={newP}
        onShowForm={onShowForm}
        onUpdateAll={onUpdateAll}
        formMaster={formMaster}
      />
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane
          tab={
            <span>
              <Icon type="deployment-unit" />
              Todos
            </span>
          }
          key="1"
        >
          <MasterListProduct
            onUpdateAll={onUpdateAll}
            currentList={currentList}
            onDeleteP={onDeleteP}
            onOpenEditProduct={onOpenEditProduct}
            onShowForm={onShowForm}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Android
            </span>
          }
          key="2"
        >
          <MasterListProduct
            onUpdateAll={onUpdateAll}
            currentList={currentList}
            onDeleteP={onDeleteP}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Apple
            </span>
          }
          key="3"
        >
          <MasterListProduct
            onUpdateAll={onUpdateAll}
            currentList={currentList}
            onDeleteP={onDeleteP}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MasterProducts;
