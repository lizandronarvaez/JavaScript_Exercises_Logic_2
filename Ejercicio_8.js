// 8.Mostrar en pantalla todos los pares comprendidos entre 20 y 200.
let numeros = []
function numerosPares() {
    for (let i = 20; i < 200; i++) {
        i % 2 == 0 ? numeros.push(i) : null
    }
}
numerosPares()
console.log(numeros)
