//Faça um programa que preencha um vetor com sete números inteiros, calcule e mostre:
//■■ os números múltiplos de 2;
//■■ os números múltiplos de 3;
//■■ os números múltiplos de 2 e de 3

var vetor = [];
var multi2 = [];
var multi3 = [];
var multi2e3 = [];

for (i=1; i<=7; i++){
    vetor[i] = parseInt(prompt("Digite o " + i + " º número do vetor "));
    if (vetor[i] >= 2){
        if (vetor[i] % 2 == 0){
            multi2 += vetor[i] + " | ";
        }
    }
    if (vetor[i] >= 3){
        if (vetor[i] % 3 == 0){
            multi3 += vetor[i] + " | ";
        }
    }
    if (vetor[i] >= 2){
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
            multi2e3 += vetor[i] + " | ";
        }
    }
}
document.write("Múltiplos de 2: " + multi2 + "<br>");
document.write("Múltiplos de 3: " + multi3 + "<br>");
document.write("Múltiplos de 2 e de 3: " + multi2e3 + "<br>");
