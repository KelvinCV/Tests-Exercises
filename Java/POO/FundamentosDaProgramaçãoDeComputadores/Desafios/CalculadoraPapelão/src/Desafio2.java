import java.util.Scanner;

public class Desafio2 {
    int quantAlvos = 5000;
    double d6, r6,r1,r2,r3,r4,r5;
    double a1,a2,a3,a4,a5,a6;
    double alvo, total;
    Scanner prompt = new Scanner(System.in);

    public void CalculoPapelao(){
        System.out.println("Informe o diâmetro do MAIOR círculo:");
        d6 = prompt.nextInt();
        // Raio do círculo: r = d/2
        r6 = d6/2;
        r1 = r6/6;
        r2 = 2 * r1;
        r3 = 3 * r1;
        r4 = 4 * r1;
        r5 = 5 * r1;
        // Área do círculo: A = π r²
        a1 = 3.14 * r1 * r1;
        a2 = 3.14 * r2 * r2;
        a3 = 3.14 * r3 * r3;
        a4 = 3.14 * r4 * r4;
        a5 = 3.14 * r5 * r5;
        a6 = 3.14 * r6 * r6;

        alvo = a1 + a2 + a3 + a4 + a5 + a6;
        total = alvo * quantAlvos;
        System.out.println("Quantidade total de papelão para " + quantAlvos + " alvos: " + Math.round(total) );
    }
}
