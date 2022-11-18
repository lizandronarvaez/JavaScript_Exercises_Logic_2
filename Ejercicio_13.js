// 13.  Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.
let numerosArray = [];
function multiplos_de_cinco(numero) {
    for (let i = 1; i < numero; i++) {
        if (i % 5 == 0) numerosArray.push(i)
    }
}
multiplos_de_cinco(20)
console.log(numerosArray)