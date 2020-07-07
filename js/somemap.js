let metodosome = ['Tigres', 'Abejas', 'Murcielagos', 'Avispas', 'Moscas'];
function palabrasSieteLetras(palabra) {
  return palabra.length >= 7;
}
console.log(metodosome.some(palabrasSieteLetras));

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
