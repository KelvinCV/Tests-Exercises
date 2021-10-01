import static java.lang.Math.*;
public class Desafio13 {
    // Função para contar os dígitos
    int contDigito(int n) {
        if (n == 0)
            return 0;
        return 1 + contDigito(n / 10);
    }
    // Retorna true se n for um número narcisista
    boolean check(int n) {
        int input = n;
        int somatorio = 0;
        // Calcula soma dos dígitos elevados à potência
        while (input > 0) {
            somatorio += pow(input % 10, contDigito(n));
            input /= 10;
        }
        return (n == somatorio);
    }
}




