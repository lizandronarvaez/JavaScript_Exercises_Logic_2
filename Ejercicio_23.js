// 23.  Leer un número entero y determinar si la suma de sus dígitos es también un número primo.
const esPrimo = (num) => {
    const numeros = num.toString().split('')
    const sumaNumeros = numeros.reduce((a, b) => { return Number(a) + Number(b) })
    // Aplicamos un condicional para comprobar que el numero que nos devuelve es primo
    return sumaNumeros % 2 == 1 ? `La suma de ${numeros} devuelve un numero primo igual a ${sumaNumeros}` :
        `La suma de ${numeros} no es numero primo`
}
// Guardamos la funcion en una constante
const resultado = esPrimo(252)
console.info(resultado)