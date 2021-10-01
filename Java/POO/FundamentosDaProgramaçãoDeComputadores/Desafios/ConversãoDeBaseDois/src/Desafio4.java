import java.util.Scanner;
public class Desafio4 {
    int n;
    int q;
    int resto[] = new int[1024];//= 10000000000(2) bytes ou 1KB
    int i = 0;
    Scanner prompt = new Scanner(System.in);

    public void conversaoBase() {
        System.out.println("Informe um número inteiro decimal(10):");
        n = prompt.nextInt();
        q = n;
        do {
            resto[i] = q % 2;
            i++;
            q = q / 2;
        }
        while (q != 0);
        System.out.println("Número " + n + " na base binária(2): ");
        for (int i = this.i - 1; i >= 0; i--) {
            System.out.print(resto[i]);
        }
    }
}

