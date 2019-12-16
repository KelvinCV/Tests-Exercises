// Faça um programa que leia um vetor com dez posições para números inteiros e mostre somente os números positivos.
var numero;
var i = 1;
var inteiros = []; 
while( i <= 10){
    var numero = parseInt(prompt("Digite o " + i +"º numero: "));
     if ( numero < 0){
         alert(" Esse número não é positivo!");
         i++;
     
     }
     if ( numero > 0){
         inteiros.push(numero);
         i++;
     }
}
document.write(" Os números positivos digitados são: " + inteiros);
