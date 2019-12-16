//3 - Ano bissexto é aquele ao qual é acrescentado um dia extra com o objetivo ajustar o calendário ao movimento de translação da terra e aos eventos desencadeados por este movimento (fenômenos meteorológicos, estações do ano...). 
//Um ano é bissexto quando é múltiplo de 4 e não é múltiplo de 100. 
//A única exceção a esta regra são anos múltiplos de 400, os quais são bissextos. 
//O presente ano de 2016 é bissexto. O próximo será 2020. O ano de 2100 não será bissexto, 
//pois é múltiplo de 100, mas o ano de 2000 foi bissexto, pois é múltiplo de 400. 

//Escreva um programa que pergunte ao usuário em que ano estamos e responda se o ano é ou não é bissexto.

var ano = parseInt(prompt("Informe o ano: "));

if(ano % 100 != 0 && ano % 4 == 0 || ano % 400 == 0){
    document.write("O ano " + ano + " é bissexto!");
}
else{
  document.write("O ano " + ano + " não é bissexto!");
}
