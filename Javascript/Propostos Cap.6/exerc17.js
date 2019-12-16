//Faça um programa que preencha dois vetores de dez posições cada, determine e mostre um terceiro contendo
//os elementos dos dois vetores anteriores ordenados de maneira decrescente.

var a = [];
var b = [];
var c = [];
var aux;
for(i=1; i <= 10; i++) {
    a[i] = prompt("Digite um valor para o " + i + "º elemento do vetor A");
    b[i] = prompt("Digite um valor para o " + i + "º elemento do vetor B");
}
for(i=1; i <= 20; i++) {
    if(i<10){
        c[i] = a[i];
    }
    else {
        c[i] = b[i-10];
    }
}

for(i=1; i<=20; i++){
		
		for (j = 0; j < c.length-1; ++j){
		
			if(c[j]<=c[j+1]){
				ax = c[j+1];
				c[j+1] = c[j];
				c[j] = ax;
			}
		}
	}
    document.write("Vetores ordenados: " +  c);
