// 25.  Leer un número entero y determinar a cuánto es igual el promedio entero de sus dígitos.
const TotalPromedio = (entero) => {
    const arrNumeros = entero.toString().split('').filter((item) => { return item != 0 })
    const promedio = (arrNumeros.reduce((a, b) => { return Number(a) + Number(b) }) / arrNumeros.length).toFixed(2)
    return `El promedio de los numeros ${arrNumeros} es ${promedio}`
}
// 
const resultado = TotalPromedio(450)
console.info(resultado)