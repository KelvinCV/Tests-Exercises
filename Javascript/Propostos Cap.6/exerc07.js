//Faça um programa que preencha um vetor com dez números reais, calcule e mostre:
// a quantidade de números negativos e a soma dos números positivos desse vetor.

var vetor = [];
var qtdNegativo = 0;
var somaPositivo = 0;

for (i = 1; i <= 10; i++) {
    vetor[i] = parseFloat(prompt("Digite o " + i + "º número "));
    if(vetor[i] < 0) {
        qtdNegativo += 1;
    }
    else {
        somaPositivo += vetor[i];
    }
}
document.write("A quantidade de números negativos é: " + qtdNegativo + "<br>")
document.write("A soma dos números positivos é: " + somaPositivo);
