const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./configs/yargs');
const colors = require('colors');

console.clear();
//console.log(argv);
/* const[ , , arg3 = 'base=5'] = process.argv;
const [ , base = 1] = arg3.split('=');
console.log(base); */

crearArchivo(argv.b, argv.l, argv.m).then((msg) => console.log(msg.bgGreen.black)).catch((err) => console.log(err.bgRen.black));