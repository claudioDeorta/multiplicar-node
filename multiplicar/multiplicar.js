//requireds

const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');


let listarTabla = (base, limite) => {

    console.log('=============='.green);
    console.log(`===tabla de ${ base } ===`.green);
    console.log('=============='.green);

    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;

        };
        console.log(data);

        if (!data) reject(err);
        else
            resolve(`Tabla con base ${ base } multiplicada hasta ${limite}`)
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introduciodo "${ base }" no es un numero `);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });

    });


}

module.exports = {

    crearArchivo,
    listarTabla

}