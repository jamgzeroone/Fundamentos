function getNumberRandom() {
  return Math.floor(Math.random() * 100);
}
let numberRandom = getNumberRandom();
let contador = 0;
do {
  contador++;
  numberRandom = getNumberRandom();
} while (numberRandom != 50);

console.log('EL numero 50 lo encontro despues de ' + contador + ' veces ' + numberRandom);
