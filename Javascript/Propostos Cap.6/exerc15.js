// Faça um programa que receba o nome de oito clientes e armazene-os em um vetor. 
// Em um segundo vetor armazene a quantidade de DVDs locados em 2011 por cada um dos oito clientes. 
// Sabe-se que, para cada dez locações, o cliente tem direito a uma locação grátis.
// Faça um programa que mostre o nome de todos os clientes, com a quantidade de locações grátis a que ele tem direito.

var vetorCliente = [];
var vetorQuantidade = []
var qtdLocacoesGratis = [];
for (i = 1; i <= 8; i++) {
    vetorCliente[i] = prompt("Digite o nome do " + i + " º cliente");
    vetorQuantidade[i] = prompt("Digite a quantidade locada em 2011");
    document.write("Nome do cliente: " + vetorCliente[i] + "<br>");

    qtdLocacoesGratis[i] = (vetorQuantidade[i]/10);
    document.write("Quantidade de locações grátis: " + qtdLocacoesGratis[i] + "<br>");
    
}
