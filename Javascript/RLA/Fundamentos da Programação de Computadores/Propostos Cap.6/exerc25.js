//Faça um programa que leia um vetor com quinze posições para números inteiros. Depois da leitura, divida
//todos os seus elementos pelo maior valor do vetor. Mostre o vetor após os cálculos.
var vetor1 = [];
var divisao;
var maior;

for(i=1;i<=15;i++){
    vetor1[i] = parseFloat(prompt("Digite o " + i + "º valor"))
    maior = vetor1[i]
}

for (i=1;i<=15;i++){
    if(vetor1[i] > maior){
        maior = vetor1[i]
    }
}

    for (i=1;i<=15;i++){
    divisao = vetor1[i]/maior
    document.write("Divisão de " + vetor1[i] + " por " + maior + " = " + divisao + "<br>");
}