# Fundamentos de Programación 

### Operadores logicos

## Estructuras de control
### Estructuras de control Condicional.
  ##### Condicional IF - ELSE IF - ELSE
  [Condicion if](https://github.com/jamgzeroone/Fundamentos/blob/master/html/conditionif.html "Condition If")
  ```
  let texto1 = 'pa pe';
  let texto2 = 'ja je';
  let texto3 = 'pe';

  if (texto1.indexOf(texto2) >= 0) {
    console.log('Variable 2 contenida en variable 1');
  } else if (texto1.indexOf(texto3) >= 0) {
    console.log('Variable 3 contenida en variable 1');
  } else if (texto2.indexOf(texto1) >= 0) {
    console.log('Variable 1 contenida en variable 2');
  } else if (texto2.indexOf(texto3) >= 0) {
    console.log('Variable 3 contenida en variable 2');
  } else if (texto3.indexOf(texto1) >= 0) {
    console.log('Variable 1 contenida en variable 3');
  } else if (texto3.indexOf(texto2) >= 0) {
    console.log('Variable 2 contenida en variable 3');
  } else {
    console.log('Ninguna de las variables se encuentra contenida en ninguna de las otras variables ');
  }

  ```
  ### Estructuras de control Repetitivo.

  ##### Condicional FOR, WHILE, DO WHILE

  [Condicion While](https://github.com/jamgzeroone/Fundamentos/blob/master/html/ciclos.html "Condicion Do While")

  ```
    function getNumberRandom() {
      return Math.floor(Math.random() * 100);
    }
    let numberRandom = getNumberRandom();
    let contador = 0;
    do {
      contador++;
      numberRandom = getNumberRandom();
      console.log(`Contador ${contador}, Numero aleatorio ${numberRandom}`);
    } while (numberRandom != 50);

    console.log('EL numero 50 lo encontro despues de ' + contador + ' veces ' + numberRandom);

  ```
 
### Métodos Javascript para Arrays y Strings.
#### Metodos Strings usados
  * endsWith
  * toLocaleUpperCase
  * toLocaleLowerCase
  * slice
  * trim
  * concat
#### Metodos Array usados
  * isArray
  * fill
  * push
  * sort
  * toString

### Métodos Javascript para some y map.
  [some y map](https://github.com/jamgzeroone/Fundamentos/blob/master/js/somemap.js "Metodos some y map")
  > some
  ```
  let metodosome = ['Tigres', 'Abejas', 'Murcielagos', 'Avispas', 'Moscas'];
  function palabrasSieteLetras(palabra) {
    return palabra.length >= 7;
  }
  console.log(metodosome.some(palabrasSieteLetras));

  ```
  >map
  ```
  let ejemplo = ['papa', 'mama', 'manzana'];
  const palabras = (palabra) => {
    return palabra.split('').reverse().join('');
  };

  function alreves(pal) {
    return pal.split('').reverse().join('');
  }
  console.log(metodosome);
  console.log(metodosome.map(alreves));
  console.log(ejemplo);
  console.log(ejemplo.map(palabras));
  ```
### Ejercicio de compensación 2 Validación.
[Validación](https://github.com/jamgzeroone/Fundamentos/blob/master/js/compensacion.js "Compensación validación")
```
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
```