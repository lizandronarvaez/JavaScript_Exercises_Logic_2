// 16. Mostrar  en  pantalla  el  promedio  entero  de  los  n  primeros  múltiplos  de  3  para  un  número  n leído.
let numerosArray = [];
function promedioNumeros(numero) {
    for (let i = 1; i < numero; i++) {
        if (i % 3 == 0) numerosArray.push(i)
    }
}
promedioNumeros(200)
const resultado = numerosArray.reduce((a, b) => a + b)
const promedioResultado = resultado / numerosArray.length
console.log(`*****Los multiplos de 3*****`)
console.log(numerosArray)
console.log(`*****El promedio total es: *****`)
console.log(promedioResultado)
