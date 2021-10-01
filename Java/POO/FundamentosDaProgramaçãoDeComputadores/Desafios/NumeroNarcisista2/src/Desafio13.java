import java.util.Scanner;
// Versão 2
public class Desafio13 {
    int n;
    int quantDigitos;
    Scanner prompt = new Scanner(System.in);

    public void nNarcisista() {
        System.out.println("Informe a QUANTIDADE de dígitos:");
        quantDigitos = prompt.nextInt();
        System.out.println("Informe o NÚMERO: ");
        n = prompt.nextInt();

        double vet[] = new double[quantDigitos];
        //System.out.println(Arrays.toString(vet));
        int input = n;
        double somatorio = 0;
        // calcula soma dos dígitos elevados à potência
        for (int i = 0; i < vet.length; i++) {
            double elevado = Math.pow(input % 10, vet.length);
            somatorio +=  elevado;
            input /= 10;
        }
        if (somatorio == n) {
            System.out.println("É narcisista!");
        }
        else {
            System.out.println("Não é narcisista!");
        }
    }
}
