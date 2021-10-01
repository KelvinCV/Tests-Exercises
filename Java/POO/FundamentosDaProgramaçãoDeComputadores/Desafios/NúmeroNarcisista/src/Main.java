import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Desafio13 nNarcisista = new Desafio13();
        int n;
        Scanner prompt = new Scanner(System.in);
        System.out.println("Informe um número");
        n = prompt.nextInt();
        if (nNarcisista.check(n))
            System.out.println("É narcisista!");
        else
            System.out.println("Não é narcisista!");
    }
}
