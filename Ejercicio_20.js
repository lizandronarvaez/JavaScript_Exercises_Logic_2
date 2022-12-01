// 20.  Leer un número entero y determinar cuántos dígitos tiene.
const totalDigitos = (digito) => {
    return `El numero introducido tiene ${digito.toString().length} digitos`
}
const resultado = totalDigitos(22112022)
console.info(resultado)