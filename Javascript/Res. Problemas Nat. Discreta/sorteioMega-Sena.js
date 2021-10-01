// Simulação de sorteio da Mega-Sena (Caixa Econômica Federal)

var loteria = [];
var chute = [];
var contador = 0;

// Sorteio dos números da loteria
 var numeroSorteado = Math.round(Math.random() * 59 + 1); // gera nº aleatório de 01 até 60
 loteria[0] = numeroSorteado;
 var i = 0;
 document.write("Números sorteados: ");

    while (i < 6) {
        var j = 0;
        numeroSorteado = Math.round(Math.random() * 59 + 1);
        
            while (j < i) {
                // Evita a repetição de números sorteados
                if (numeroSorteado == loteria[j]) { 
                    numeroSorteado = Math.round(Math.random() * 59 + 1);
                    j=0 
                }
                else {
                    j +=  1
                }
            }
            loteria[j] = numeroSorteado;
            i += 1;
                // Acrescenta uma string 0 à esquerda em numéros menores ou igual a 9
                if (numeroSorteado <= 9){
                    numeroSorteado = "0" + numeroSorteado;
            }
            document.write(numeroSorteado + " | ");
        }
    

    console.log(loteria);

// Pegando os números do chute
   document.write( "<br>" + "Números digitados: ")
   for(var j = 0; j < 6; j++) {
        var posicao = j + 1;
        var num = parseInt(prompt("Digite o " + posicao + "º número"));
        chute.push(num);
        if (num <= 9){
            num = "0" + num;
        } 
        document.write(num + " | ");
    } 


// Comparando os valores dos dois arrays
    for(var i = 0; i < 6; i++) {
        for(var j = 0; j < 6; j++) {
            if (loteria[i] == chute [j]) {
                contador += 1;
            }
        }

    }

alert("Você acertou " + contador + " número(s)!");
document.write("<br>" + "Quantidade de acertos: " +  contador + "<br>");
