// 19.  Leer un número entero y determinar si es primo.
const esPrimo = (numero) => {
    return numero % 2 == 1 ? `${numero} es un numero primo` : `${numero} no es numero primo`
}

const resultado = esPrimo(18)
console.info(resultado)