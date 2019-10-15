const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log('Listar');

        listarTabla(base, limite)
            .then(archivo => console.log(`Creado con exito ${archivo}`))
            .catch(e => console.log(e));

        break;

    case 'crear':
        console.log('crear');
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado : ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconociodo');
        break;
}
//let base = 5;
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log('Limite', argv.limite);