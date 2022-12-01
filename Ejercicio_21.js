// 21.  Leer un número entero y determinar a cuánto es igual al suma de sus dígitos.

const sumaDigitos = num => {
    const arrNumeros = num.toString().split('')
    const sumaArray = arrNumeros.reduce((a, b) => { return Number(a) + Number(b) })
    return sumaArray
}
const resultado = sumaDigitos(1993);
console.log(resultado)