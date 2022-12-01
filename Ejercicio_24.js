// 24.  Leer un número entero y determinar a cuánto es igual la suma de sus dígitos pares.
const sumar_solo_pares = (numero) => {
    const arrayNuevo = numero.toString().split('').filter((item)=>{return item != 0 })
    const buscaNumerosPares = arrayNuevo.filter(num => num % 2 == 0)
    const numerosPares = buscaNumerosPares.reduce((a, b) => { return Number(a) + Number(b) })
    // Sumaremos los digitos una vez busquemos los numeros pares
    return `El numero introducido ${numero} tiene ${buscaNumerosPares.length} pares, y su resultado es: ${numerosPares}`
}
const resultado = sumar_solo_pares(20221993)

console.log(resultado)