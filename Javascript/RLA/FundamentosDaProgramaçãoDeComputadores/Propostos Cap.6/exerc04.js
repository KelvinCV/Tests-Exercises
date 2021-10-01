// Faça um programa que preencha um vetor com quinze elementos inteiros 
// e verifique a existência de elementos iguais a 30, mostrando as posições em que apareceram.

var vetor = [];
var posicao = [];
var cont = 0;

for ( i = 1; i <= 15; i++) {
    vetor[i] = prompt("Digite o " + i + " º número");
    if (vetor[i] == 30) {
        document.write("Na posição " + i + " existe o número 30" + "<br>");
        cont = 1;
        if ( cont == 0) {
            document.write("O número 30 não existe no vetor")
        }
    }
}
