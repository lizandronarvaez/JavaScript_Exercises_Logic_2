// 11.Leer  un  número  entero  de  dos  dígitos  y  mostrar  en  pantalla  todos  los  enteros  comprendidos entre un dígito y otro.
const almacenarNumeros = []
function printNumber(param1, param2) {
    for (let i = param1; i < param2; i++) {
        almacenarNumeros.push(i)
    }
}

printNumber(2, 9)
console.log(almacenarNumeros)
