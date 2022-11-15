// 1O. Leer   un   número   entero   y   determinar   a   cuánto   es   igual   la   suma   de   
// todos   los   enteros comprendidos entre 1 y el número leído.
let arrayNumeros = [];
let resultado = 0
function sumaEnteros(numero) {
    for (let i = 1; i < numero; i++) {
        arrayNumeros.push(i)
        resultado += i
    }
}
sumaEnteros(100)
console.log(arrayNumeros)
console.log(`La suma total de los numeros de arrayNumeros es ${resultado}`)