// Faça um programa que receba dez números inteiros e armazene-os em um vetor. 
// Calcule e mostre dois vetores resultantes: o primeiro com os números pares e o segundo, com os números ímpares.

var pares = [];
var impares = [];
var  i = 1;
var numero;

while ((pares.length + impares.length) < 10) {

  numero = parseFloat(prompt("Digite o "+ i +"º numero:"));
  if (numero % 2 == 0) {
    if (pares.length >= 5) {
      alert("O armazenamento de pares está completo, digite só impares.");
    } else {
      pares.push(numero);
      i++;
    }
  }

  if (numero % 2 != 0) {
    if (impares.length >= 5) {
      alert("O armazenamento de impares está completo, digite só pares.");
    } else {
      impares.push(numero);
      i++;
    }
  }
}
document.write("Pares: " + pares +"<br>");
document.write("Ímpares: " + impares +"<br>");
