// 15.  Escribir en pantalla el resultado de sumar los primeros 20 múltiplos de 3.
let numeros = [];
let multiplos = 20;
let contador = 0;
function multiplos_de_tres() {
    for (let i = 1; i < multiplos; i++) {
        numeros.push(i * 3)
    }
}
const resultado = multiplos_de_tres()
const sumatotal=numeros.reduce((a,b)=>{return a + b})
console.log(numeros)
console.log(`La suma total de ${numeros} es: `)
console.log(sumatotal)