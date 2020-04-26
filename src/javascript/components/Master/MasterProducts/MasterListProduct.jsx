/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

// Other
import { Button, Table } from 'antd';

const MasterListProduct = props => {
  const {
    onUpdateAll,
    currentList,
    onDeleteP,
    onOpenEditProduct,
    onShowForm
  } = props;
  const dataSource = currentList;

  useEffect(() => {
    onUpdateAll();
  }, []);

  const clickTest = e => {
    console.log('delete test: ', e.target.value);
    onDeleteP(e.target.value);
  };
  const editOpen = e => {
    onOpenEditProduct(e.target.value);
    onShowForm();
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'modelo',
      key: 'modelo'
    },
    {
      title: 'Costo',
      dataIndex: 'costo',
      key: 'costo'
    },
    {
      title: 'Disponibles',
      dataIndex: 'disponibles',
      key: 'disponibles'
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      key: 'id',
      render: id => (
        <Button onClick={clickTest} value={id} type="danger">
          Borrar
        </Button>
      )
    },
    {
      title: 'Edit',
      dataIndex: 'id',
      key: 'id',
      render: id => (
        <Button onClick={editOpen} value={id} type="primary">
          Editar
        </Button>
      )
    },
    {
      title: 'Portada',
      dataIndex: 'images',
      key: 'images',
      render: images => (
        <span>
          <img src={images.cover} alt="vmo" width="40px" />
        </span>
      )
    }
  ];
  return (
    <React.Fragment>
      <Table dataSource={dataSource} columns={columns} />
    </React.Fragment>
  );
};

export default MasterListProduct;
