export const urlProduct = 'http://shellyboost.com:4000/';

export const urlPedidos = 'http://shellyboost.com:4001/';

export const getAllProducts = async server => {
  const endpoint = 'productos/todos';
  const url = server + endpoint;
  const params = {
    method: 'GET', // Método para subir informacion
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, { ...params });
  const data = await response.json();
  return data;
};

export const getProduct = async (server, id) => {
  const endpoint = 'productos/';
  const url = server + endpoint + id;
  const params = {
    method: 'GET', // Método para subir informacion
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, { ...params });
  const data = await response.json();
  return data;
};

export const insertProduct = async (server, form) => {
  const endpoint = 'productos/registrar';
  const url = server + endpoint;
  const data = { ...form };
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, { ...params });
  const jsonRes = await response.json();
  return jsonRes;
};

export const deleteProduct = async (server, form) => {
  const endpoint = 'productos/borrar/' + form.id;
  const url = server + endpoint;
  console.log('url: ', form.id);

  const params = {
    method: 'DELETE',
    body: {},
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, { ...params });
  const jsonRes = await response.json();
  return jsonRes;
};

export const insertOrden = async (server, form) => {
  const endpoint = 'ordenes/registrar';
  const url = server + endpoint;
  const data = form;
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, { ...params });
  const jsonRes = await response.json();
  return jsonRes;
};
