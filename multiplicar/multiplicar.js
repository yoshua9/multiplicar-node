const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('================'.green);
    console.log(`==tabla de ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        //data += `${base} * ${i} = ${base*i}\n`;
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
    //return data;
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        data = listarTabla(base, limite);

        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla ${base}-al-${limite}.txt`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}