const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base, listar, maximo) => {
    try {
        let salida, consola = '';
        for (let i = 1; i <= maximo; i++) {
            const elem = i * base;
            salida += `${base} x ${i} = ${elem} \n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${elem} \n`;
        }

        if (listar) {
            console.log('===================='.magenta);
            console.log(`     Tabla del ${base}    `.bgMagenta.black);
            console.log('===================='.magenta);
            console.log(consola);
        }

        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`Tabla del ${base} generado correctamente`);
        }); */
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla del ${base} generado correctamente`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
};