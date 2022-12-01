// 22.  Leer un número entero y determinar cuántas veces tiene el dígito 1.
const numeroRepetido = (numero) => {
    numero.toString().split('')
    const filtraNumero = arrayNumeros.filter(num => { return num == 1 })
    return `El numero 1 se repite ${filtraNumero.length} veces `
}
const resultado = numeroRepetido(1111223);
console.log(resultado)
