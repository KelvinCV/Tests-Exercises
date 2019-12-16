//Faça um programa que preencha um vetor com os nomes de sete alunos e carregue outro vetor com a média final desses alunos. Calcule e mostre:
//■■ o nome do aluno com maior média (desconsiderar empates);
//■■ para cada aluno não aprovado, isto é, com média menor que 7, mostrar quanto esse aluno precisa tirar
//na prova de exame final para ser aprovado. Considerar que a média para aprovação no exame é 5.

var vetorNomes = [];
var vetorMedia = [];
var nomeMediaMaior; 
var mediaMaior = 0;
var notaExame;

for (i = 1; i <= 7; i++) {
    vetorNomes[i] = prompt("Digite o nome do  " + i + " º aluno.");
    vetorMedia[i] = parseFloat(prompt("Digite a média do  " + i + " º aluno.")); 
    if(vetorMedia[i] >= mediaMaior){
         mediaMaior = vetorMedia[i];
         nomeMediaMaior = vetorNomes[i];
    }
    if(vetorMedia[i] < 7){
            notaExame = 10 - vetorMedia[i];
            if(notaExame > 10){
                document.write(" O aluno " + vetorNomes[i] + " foi reprovado." + "<br>");

            }
            else {
                document.write(" O aluno " + vetorNomes[i] + " precisa de " + notaExame + " para ser aprovado." + "<br>");
            }
        }
 }

document.write("O aluno " + nomeMediaMaior +  " obteve a maior nota");
