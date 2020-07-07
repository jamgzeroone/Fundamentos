let palabra = String.fromCharCode(65, 66, 67, 92, 75, 64);
console.log(palabra);
let frase = ' "El que a su gata le CUENTA no es mas que un RATON un ratón de"';
console.log(frase);
console.log('La palabra "ratón" en la posición 59 se encuentra ' + frase.endsWith('ratón', 59));
console.log(
  'La palabra "ratón de" al final de la frase se encuentra ' + frase.endsWith('ratón de"')
);
console.log('La palabra sol al final se encuentra en la frase ' + frase.endsWith('Sol'));
console.log('Frase en mayúsculas ' + frase.toLocaleUpperCase());
console.log('Frase en minúsculas ' + frase.toLocaleLowerCase());
console.log('frase con reemplazo' + frase.replace('ratón', 'gato'));
console.log('Frase con slide cortada ' + frase.slice(20, -7));
console.log('Frase con slide cortada ' + frase.slice(12));
let frase2 = '    "esto tiene espacios al inicio y al final"     ';
console.log(frase2);
console.log('Frase 2 sin espacios ' + frase2.trim());
console.log('Frase y frase 2 combinada' + frase.concat(frase2));

let edades = [14, 19, 34, 18, 21, 27];
let frutas = ['Pera', 'Manzana', 'Durazno', 'Naranja'];
console.log(edades);
console.log(frutas);
edades.forEach(function (elemento, indice) {
  console.log(elemento, indice);
});
console.log(`${frutas}  es un array  ${Array.isArray(frutas)}`);
console.log(`${edades} despues del elemento 3 dejar estaico un valor x  ${edades.fill('X', 3)}`);
console.log(
  `${frutas} Agregar elementos al final de array con push "Melocoton, Uva" cantidad de elementos  ${frutas.push(
    'Melocoton',
    'Uva'
  )}, ${frutas} `
);
console.log();
let fechas = [1534, 1991, 1154, 1800, 2010, 1974];
console.log(`${fechas} ordenar el fechas edades con sort ${fechas.sort()}`);
console.log(`${fechas} devolver un string de un array ${fechas.toString()}`);
