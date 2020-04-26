import React, { useState } from 'react';

// Components
import Login from 'Comp/Master/Login';
import MasterBar from 'Comp/Master/MasterBar';
import MasterProducts from 'Comp/Master/MasterProducts';

// Functions
import {
  urlProduct,
  insertProduct,
  getAllProducts,
  getProduct,
  deleteProduct
} from 'Others/peticiones';

// import servicesData from 'Others/servicesData.json';

const Master = () => {
  const [currentWindow, setCurrentWindow] = useState('products');
  const [currentList, setCurrentList] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem('auth'));
  const [form, setForm] = useState({});

  const reMapForm = obj => {
    // covierte el form de {url1: '', url2: '', ...} a {images: cover: '', extra: []}
    let newImages;
    const fieldName = Object.keys(obj)[0];
    const value = Object.values(obj)[0];

    switch (fieldName) {
      case 'url1':
        if (form.images) {
          newImages = { images: { ...form.images, cover: value } };
        } else {
          newImages = {
            images: {
              cover: value
            }
          };
        }
        break;
      case 'url2':
        if (form.images) {
          const newExtra = [
            value,
            form.images.extra[1] || '',
            form.images.extra[2] || ''
          ];
          newImages = { images: { ...form.images, extra: newExtra } };
        } else {
          newImages = {
            images: {
              extra: [value, '', '']
            }
          };
        }
        break;
      case 'url3':
        if (form.images) {
          const newExtra = [
            form.images.extra[0] || '',
            value,
            form.images.extra[2] || ''
          ];
          newImages = { images: { ...form.images, extra: newExtra } };
        } else {
          newImages = {
            images: {
              extra: ['', value, '']
            }
          };
        }
        break;
      case 'url4':
        if (form.images) {
          const newExtra = [
            form.images.extra[0] || '',
            form.images.extra[1] || '',
            value
          ];
          newImages = { images: { ...form.images, extra: newExtra } };
        } else {
          newImages = {
            images: {
              extra: ['', '', value]
            }
          };
        }
        break;
      default:
        newImages = obj;
        break;
    }
    console.log('Interceptando form', newImages);
    return newImages;
  };

  const updateForm = keyValue => {
    if (keyValue === 'clear') {
      setForm({});
    } else {
      setForm({ ...form, ...reMapForm(keyValue) });
    }
  };

  const onLogin = () => {
    localStorage.setItem('auth', 'true');
    setAuth(localStorage.getItem('auth'));
  };
  const onLogout = () => {
    localStorage.clear();
    setAuth(localStorage.getItem('auth'));
  };
  const onMenuChange = cad => {
    setCurrentWindow(cad);
  };

  // const cleanForm = () => {
  //   setForm({});
  // };

  const onOpenEditProduct = id => {
    getProduct(urlProduct, id).then(data => {
      setForm(data);
    });
  };

  const onNewProduct = () => {
    return insertProduct(urlProduct, form);
  };

  const onUpdateAll = () => {
    getAllProducts(urlProduct).then(data => {
      setCurrentList(
        data.map(element => {
          return {
            key: element.id,
            ...element
          };
        })
      );
    });
  };

  const onDeleteP = idButton => {
    deleteProduct(urlProduct, { id: idButton }).then(() => {
      onUpdateAll();
    });
  };

  if (auth !== 'true') {
    return (
      <React.Fragment>
        <Login onLogin={onLogin} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <MasterBar
        onLogout={onLogout}
        currentWindow={currentWindow}
        onMenuChange={onMenuChange}
      />
      <MasterProducts
        onNewProduct={onNewProduct}
        updateForm={updateForm}
        formMaster={form}
        onUpdateAll={onUpdateAll}
        currentList={currentList}
        onOpenEditProduct={onOpenEditProduct}
        onDeleteP={onDeleteP}
      />
    </React.Fragment>
  );
};

export default Master;
