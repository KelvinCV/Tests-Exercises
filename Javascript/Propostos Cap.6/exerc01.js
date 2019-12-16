//Faça um programa que preencha um vetor com seis elementos numéricos inteiros. Calcule e mostre:
//■■ todos os números pares;
//■■ a quantidade de números pares;
//■■ todos os números ímpares;
//■■ a quantidade de números ímpares.

var vetor = [];
var par = []
var impar = []
var quantPar = 0;
var quantImpar = 0;

for (i = 1; i <= 6; i++) {
     vetor[i] = parseInt(prompt("Digite o " + i + " º número do vetor "));
     
    if (vetor[i] % 2 == 0) {
        quantPar++;
        par += vetor[i] + "<br> ";
    }
    else {
        quantImpar++;
        impar += vetor[i]+ "<br> ";
    }
}
document.write("Quantidade de números pares: " + quantPar + "<br>" );
document.write(" Quantidade de números ímpares: " + quantImpar + "<br>" );
document.write(" Pares: <br>" + par + "<br>" );
document.write(" Ímpares: <br>" + impar);
