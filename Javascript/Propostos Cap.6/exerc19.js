//Faça um programa que leia dois vetores de dez posições e faça a multiplicação dos elementos de mesmo
//índice, colocando o resultado em um terceiro vetor. Mostre o vetor resultante.

var vet1 = [];
var vet2 = [];
var vet3 = [];

var i = 1;
var j = 1;
while(i <= 10){
    var numero = parseInt(prompt( " Digite um número "+i+ ": "));
    vet1.push(numero);
    i++;
}
while( j<= 10){
    var numero = parseInt(prompt(" Digite um número " +j+ ": "));
    vet2.push(numero);
    j++;
}

var result = vet1.map(function(num, index){ 
 return vet2[index] * num 
});

document.write(result);
