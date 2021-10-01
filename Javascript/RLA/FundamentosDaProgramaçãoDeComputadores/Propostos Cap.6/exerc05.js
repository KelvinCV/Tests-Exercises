// Uma escola deseja saber se existem alunos cursando, simultaneamente, as disciplinas Lógica e Linguagem de Programação. 
// Coloque os números das matrículas dos alunos que cursam Lógica em um vetor, quinze alunos.
// Coloque os números das matrículas dos alunos que cursam Linguagem de Programação em outro vetor, dez alunos. 
// Mostre o número das matrículas que aparecem nos dois vetores.

var vetorLogica = [];
var vetorProgramacao = [];
var vetorResultante = [];

for (i = 1; i <= 15; i++) {
    vetorLogica[i] = prompt("Digite a matrícula do " + i + " º aluno de Lógica");
}
for ( j = 1; j <= 10; j++){
        vetorProgramacao[j] = prompt("Digite a matrícula do " + j + " º aluno de Linguagem de Programação");
        
    }
    for (i = 1; i <= 15; i++) {
        for ( j = 1; j <= 10; j++){
            if (vetorLogica[i] == vetorProgramacao[j]) {
            vetorResultante[j] = vetorLogica[i]
        }
      
    }
        
}   
document.write("Matrículas dos alunos que cursam as duas disciplinas: " + vetorResultante);
