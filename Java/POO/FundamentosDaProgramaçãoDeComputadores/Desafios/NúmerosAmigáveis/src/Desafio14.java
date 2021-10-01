import java.util.Scanner;
public class Desafio14 {
    int n1;
    int n2;
    int i;
    Scanner prompt =new Scanner(System.in);

    public void nAmigavel() {
        System.out.println("Informe DOIS números para comparação:");
        n1 = prompt.nextInt();
        n2 = prompt.nextInt();
        int soma1=0;
        int soma2=0;
        for(i=1; i< n1; i++) {
            if(n1 % i == 0) {
                soma1 += i - soma1; // cálculo da soma dos divisores menos o próprio n1
            }
        }
        for(i=1; i< n2; i++) {
            if(n2 % i == 0) {
                soma2 += i - soma2; // cálculo da soma dos divisores menos o próprio n2
            }
        }
        if((double) n1 / n2 ==(double)soma1/soma2)
            System.out.println("São números amigáveis!");
        else
            System.out.println("Não são números amigáveis!");
        prompt.close();
    }
}
