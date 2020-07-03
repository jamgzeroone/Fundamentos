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
  ##### Condicional FOR, WHILE, DO WHILE
  [Condicion While](https://github.com/jamgzeroone/Fundamentos/blob/master/html/ciclos.html "Condicion Do While")
 
### Estructuras de control Repetitivo
