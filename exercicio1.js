

/*
    Atividade 1: Implemente a função calcular utilizando 
    um callback como parametro para realizar as operações matemáticas:
    
    1. Somar dois ou mais valores.
    2. Subtrair dois ou mais valores.
    3. Dividir dois ou mais valores.
    4. Multiplicar dois ou mais valores.

*/

function somarValores(n1, n2) {
    return n1 + n2 

}

function subtrairValores(n1, n2) {
    return n1 - n2 
}

function dividirValores(n1, n2) {
    return n1 / n2 
}

function multiplicarValores(n1, n2) {
    return n1 * n2 
}

function calcular(n1, n2, callback) {
    let result = callback(n1, n2)
    return result
        
}


console.log("------ Resultados da Atividade ------");
console.log("1. Resultado da soma:", calcular(2,2, somarValores));
console.log("2. Resultado da subtração:", calcular(4,2, subtrairValores));
console.log("3. Resultado da divisão:", calcular(2,3, dividirValores));
console.log("4. Resultado da multiplicação:", calcular(2,2, multiplicarValores));