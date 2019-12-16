//Faça um programa que leia um vetor com dez posições para números inteiros. Crie um segundo vetor,
//substituindo os valores nulos por 1. Mostre os dois vetores.

var numero;
var i = 1;
var convertidos = []; 
var original= [];

while( i <= 20){
    numero = parseInt(prompt("Digite um número")); 
    if ( numero > 0 || numero < 0){
    numero = numero;
    original.push(numero);
    i++;
    }
    if ( numero < 0 ){
    numero = 1;
    convertidos.push(numero);
    i++;
    }else{
   numero = numero;
   convertidos.push(numero);
   i++;     
   }
}
document.write( "Vetor original com todos os números: " + original + "<br>");
document.write( " O vetor com os números nulos convertidos: "  + convertidos);
