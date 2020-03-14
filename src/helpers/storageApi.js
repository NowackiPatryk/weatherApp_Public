const setStorageValue = ( name,value )=> localStorage.setItem(name, value);

const getStorageValue = name => localStorage.getItem(name);

const checkIfValueExist = name => localStorage.getItem(name) ? true : false;


export { setStorageValue, getStorageValue, checkIfValueExist };