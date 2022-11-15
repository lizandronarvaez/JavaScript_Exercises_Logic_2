// 9.Mostrar en pantalla todos los números terminados en 6 comprendidos entre 25 y 205.
let arrayNumeros = []
function numero_final_seis(numero1, numero2) {
    for (let i = numero1; i < numero2; i++) {
        i.toString().slice(-1) == 6 ?
            arrayNumeros.push(i)
            : null
    }
}

numero_final_seis(25, 205)
console.log(arrayNumeros)