const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar a generar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muesta la impresión por consola, deshabilitada por defecto'
    }).option('m', {
        alias: 'maximo',
        type: 'number',
        default: 10,
        describe: 'Numero maximo a multiplicar'    
    })
    .check((argv) => {
        if (isNaN(argv.b) || isNaN(argv.m)) {
            throw 'La base y el maximo deben ser un numero';
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;