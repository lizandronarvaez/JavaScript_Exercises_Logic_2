// 14.  Mostrar en pantalla los primeros 20 múltiplos de 3.
let numeros = [];
let multiplos = 20;
function multiplos_de_tres() {
    for (let i = 1; i < multiplos; i++) {
        numeros.push(i * 3)
    }
}
multiplos_de_tres()
console.log(numeros)
