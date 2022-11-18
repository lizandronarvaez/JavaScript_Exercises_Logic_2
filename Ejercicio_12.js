// 12.  Leer un número entero de 3 dígitos y determinar si tiene el dígito 1.
const numeroInluido = (numero) => {
    const buscarNumero = numero.toString().includes(1)
    return buscarNumero? `El numero 1 esta incluido en la cadena de numeros ${numero}`
        : `El numero 1 no esta incluido`
}

const resultado=numeroInluido(145);
console.log(resultado)
