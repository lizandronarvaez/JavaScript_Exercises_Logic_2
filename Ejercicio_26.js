// 26.  Leer un número entero y determinar cuál es el mayor de sus dígitos.
function digitoMayor(numero) {
    let nuevoArray = numero.toString().split('')
    let numeroMayor = Math.max(...nuevoArray)
    return `El numero mayor de ${nuevoArray} es ${numeroMayor} `
}
const resultado = digitoMayor(287)
console.info(resultado)