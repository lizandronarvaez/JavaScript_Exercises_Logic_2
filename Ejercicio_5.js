// 5.    Leer dos números y mostrar todos los números terminados en 4 comprendidos entre ellos.
const prompt = require('prompt-sync')()
let numero1 = prompt('Introduce un numero: ')
let numero2 = prompt('Introduce otro numero: ')
let numerosTerminadosEnCuatro = []
// Creamos un  bucle condicional
for (let i = numero1; i < numero2; i++) {
    // Aplicamos un condicional para buscar los numeros terminados en 4
    i.toString().slice(-1) == 4 ? numerosTerminadosEnCuatro.push(i) : null
}

console.log(numerosTerminadosEnCuatro)