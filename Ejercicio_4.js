// 4.    Leer dos números y mostrar todos los enteros comprendidos entre ellos.
const prompt = require('prompt-sync')()
// Leemos el numero entero
let numeroEntero = prompt('Introduce un numero entero: ')
let numeroEntero2 = prompt('Introduce un numero entero: ')
// Almacenamos los numeros divisores en un array
let arrayNumeros = []
//Aplicando un condicional para imprimir los numeros
for (let i = numeroEntero; i < numeroEntero2; i++) {
    arrayNumeros.push(i)
}
console.log(arrayNumeros)