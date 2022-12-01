// 18. Leer dos números entero y mostrar todos los múltiplos de 5 comprendidos entre el menor y el mayor.
let multiplosArray = ["Estos son los multiplos de 5: "]
const multiplosDeCinco = (numUno, numDos) => {
    for (let i = numUno; i < numDos; i++) {
        if (i % 5 == 0) multiplosArray.push(i)
    }
}
multiplosDeCinco(5, 50)
console.info(multiplosArray)