//ES5 - variables
/*var nombre = 'Agustin';
console.log(nombre);
nombre='Manuel';
console.log(nombre);


//ES6 - Variables
const nombre6="Luis"
let edad=35;
console.log(nombre6);
console.log(edad);
edad=40;
console.log(edad);

//Funciones flecha

//Las funciones en ES5
const year = [2000,2005,2008,2015];
var edad5= year.map(function(el){
    return 2021-el;
})
console.log(edad5);

//Funciones en ES6 de tipo Flecha
let edad6=year.map((el)=>{
    return 2021-el;
})
console.log(edad6);
//otra forma mas resumida * el let lo saque para no declarar otra vez *

edad6=year.map(el => 2021-el);
console.log(edad6);

//Funciones CALL-BACK

function sumar(num1,num2,callback){
    let resultado = num1+num2;
    console.log('Mesaje antes de la llamada CALLBACK.');
    callback(resultado);
}

function saludo(res){
    console.log('EL resultado es '+res);

}

sumar(5,8,saludo);

setTimeout(function(){
    console.log('esto se va a ejecutar despues de 3 segundos');
}, 3000);

setTimeout(() =>  console.log('hola depues de 3 segundos'), 6000);

//Problema de los callback: se puede hacer muy engorroso

//Pomesas

const mensaje= new Promise((resolve,reject)=> {
    setTimeout(() => {
        if(false)
            resolve('esto se va a ejecutar despues de 3 segundos lol');
        else
            reject('hubo un error.');
    }, 3000);
});


mensaje
    .then(  msj => {
        console.log(msj);
    })
    .catch(error =>{
        console.log(error)
    })

//funcion async y awhile

*/

function mensaje(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(false)
                resolve('Esto se va a ejecutar despues de 3 segundos');
            else
                reject('Hubo un error');
        }, 3000);
    })
}

async function llamadaAsyc(){
    console.log('Llamada . . .');
    const resultado = await mensaje();
    return resultado;
}

llamadaAsyc().then(x => console.log(x)).catch(e  => console.log(e));