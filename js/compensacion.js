const validatePass = () => {
  let password = document.getElementById('inputPassword').value;
  let buscarNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let buscarCar = ['#', '$', '%', '/', '@'];
  let palabra1 = password.split('');

  function numContenido(numero) {
    if (buscarNum.indexOf(numero) != -1) {
      return true;
    }
    return false;
  }
  function carContenido(caracter) {
    if (buscarCar.indexOf(caracter) != -1) {
      return true;
    }
    return false;
  }
  if (palabra1.some(numContenido) && palabra1.some(carContenido)) {
    return true;
  } else {
    return false;
  }
};
