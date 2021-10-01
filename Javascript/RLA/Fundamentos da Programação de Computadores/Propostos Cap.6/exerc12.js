//Faça um programa que receba cinco números e mostre a saída a seguir:
//Digite o 1º número 5
//Digite o 2º número 3
//Digite o 3º número 2
//Digite o 4º número 0
//Digite o 5º número 2
//Os números digitados foram: 5 + 3 + 2 + 0 + 2 = 12

var vetor = [];
var soma = 0;
for(i=1;i<=5;i++) {
    vetor[i] = parseInt(prompt("Digite o " + i + "º número"));
    soma += vetor[i];
    
}
document.write("Os número digitados foram: " + vetor[1] + " + " + vetor[2] + " + " + vetor[3] + " + " + vetor[4] + " + " + vetor[5] + " = " + soma);
