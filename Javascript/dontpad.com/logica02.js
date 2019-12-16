//2 - O WCT (World Championship Tour) é o campeonato promovido pela WSL (World Surf League) no qual competem nomes da elite do surf mundial. 
//Durante a competição, 5 juízes avaliam as ondas dos atletas com notas de 0 a 10, sendo descartadas as notas menor e maior.
// Assim, a nota da banca é a média entre as 3 notas restantes. 
//Escreva um programa que leia a nota dos 5 juízes e informe a nota final do competidor.

var nota = [];
nota[0] = 10
nota[1] = 0 
var min = nota[0];
var max = nota[1];

somaNotas = 0;

for(i = 1; i <= 5; i++){
    nota[i] = parseFloat(prompt("Informe a " + i + "º nota"));
    if(nota[i] < min){
        min = nota[i];
        
    }
    if(nota[i] > max){
            max = nota[i];
        }

 
 somaNotas += nota[i];

}

var mediaNotas = (somaNotas - max - min)/3
document.write("Média das notas: " + mediaNotas);
