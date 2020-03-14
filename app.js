const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

// console.log('hello'.green); // outputs green text

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(console.log(e));