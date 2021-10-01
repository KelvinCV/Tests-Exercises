//1- Escreva um programa que leia a idade e o sexo de alguns alunos e mostre as seguintes informações:
//a) Idade do aluno mais novo.
//b) Média de idade da turma.
//c) Média de idade das mulheres.
//Obs: A cada leitura relativa a um aluno, o programa deve questionar se o usuário deseja ou não continuar, 
// mostrando as informações e encerrando em caso negativo.

var idadeAluno = [];
idadeAluno[0] = Infinity;
var menorIdade = idadeAluno[0];
var sexo =[];
var quantAlunos = 0;
var somaIdades = 0;
var quantMulheres = 0;
var somaIdadeMulheres = 0;

for(i=1; i <= idadeAluno.length +1; i++){
    idadeAluno[i] = parseInt(prompt("Qual a idade do " + i + "º aluno?"));
    sexo[i] = prompt("Qual o sexo do " + i + "º aluno (M/F)" );
    quantAlunos++;
    somaIdades += idadeAluno[i];
        // Pega a idade do aluno e compara com infinito gerando a menor idade
        if(idadeAluno[i] < menorIdade) {
            menorIdade = idadeAluno[i]
        }
        if(sexo[i] == "F" || sexo[i] == "f"){
            quantMulheres++;
            somaIdadeMulheres += idadeAluno[i];


        }
    var continuar = prompt("Idade: " + idadeAluno[i] + "\n Sexo: " + sexo[i] + "\n Deseja continuar? (S/N)");
        if(continuar == "N" || continuar == "n"){
            break;
            
        }
}
var mediaIdades = somaIdades/quantAlunos;
var mediaIdadeMulheres = somaIdadeMulheres/quantMulheres;

document.write("Menor idade: " + menorIdade + " anos <br>");
document.write("Média de idade da turma: " + mediaIdades + " anos <br>");
document.write("Média de idade das mulheres: " + mediaIdadeMulheres + " anos <br>");
