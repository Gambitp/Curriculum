//const datos = require('./datos');

//datos.log('Hola mundo');

//console.log(module);

//const path = require('path');

//const objPath = path.parse(__filename);

//console.log(objPath);

const os = require('os');

var memoriaLibre = os.freemem;

var memoriaTotal = os.totalmem;

console.log(`Memoria libre: ${memoriaLibre}`);
console.log(`Memoria total: ${memoriaTotal}`);