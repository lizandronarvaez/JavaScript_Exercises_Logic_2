// 3.    Leer un número entero y mostrar todos los divisores exactos del número comprendidos entre 1 y el número leído.
const prompt = require('prompt-sync')()
// Leemos el numero entero
let numeroEntero = prompt('Introduce un numero entero: ')
// Almacenamos los numeros divisores en un array
let arrayNumeros = []
//Aplicando un condicional para imprimir los numeros
for (let i = 1; i < numeroEntero; i++) {
    numeroEntero % i == 0 ? arrayNumeros.push(i) : null
}

console.log(arrayNumeros)