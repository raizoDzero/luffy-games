export const priceFormat = number => {
  let num = number;
  num = num.toFixed(2);
  num = num.toString(10);
  const max = num.length;
  const comaIndex = max - 6;
  const half1 = str => {
    let cadena = '';
    for (let i = 0; i < comaIndex; i++) {
      cadena += str[i];
    }
    return cadena;
  };
  const half2 = str => {
    let cadena = '';
    for (let i = comaIndex; i < max; i++) {
      cadena += str[i];
    }
    return cadena;
  };

  const finalNum = '$' + half1(num) + ',' + half2(num);
  return finalNum;
};

export const copyToEnd = (str, index) => {
  let copy = '';
  for (let i = index; i < str.length; i++) {
    copy += str[i];
  }
  return copy;
};

export const findIndexArrayObj = (array, obj) => {
  const value = Object.values(obj)[0];
  const isValueEqual = element => element === value; // Criterio de búsqueda para un mapeo
  let i;
  let found = false;
  for (i = 0; i < array.length; i++) {
    const values = Object.values(array[i]);
    if (values.findIndex(isValueEqual) !== -1) {
      found = true;
      break;
    }
  }
  return found ? i : -1;
};
