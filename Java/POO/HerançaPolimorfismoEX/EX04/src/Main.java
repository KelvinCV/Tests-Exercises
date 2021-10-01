import javax.swing.*;

public class Main {
    public static void main(String[] args) {

        int quantidade = 10;

        // Jaulas e Animais
        Animal[] jaulas = new Animal[quantidade];

        for (int i = 0; i < quantidade; i++) {
            String nome = JOptionPane.showInputDialog("Qual o animal deseja colocar na jaula nº" +i+"?");
            if (nome.equalsIgnoreCase("cachorro")) {
                Animal cachorro = new Cachorro();
                jaulas[i] = cachorro;
            }
            if (nome.equalsIgnoreCase("cavalo")) {
                Animal cavalo = new Cavalo();
                jaulas[i] = cavalo;

            }
            if (nome.equalsIgnoreCase("preguiça")) {
                Animal preguica = new Preguica();
                jaulas[i] = preguica;
            }
        }


        Zoologico zoologico = new Zoologico(quantidade);
        zoologico.setJaulas(jaulas);

        for (Animal animal : zoologico.getJaulas()) {

            JOptionPane.showMessageDialog(null, animal.emitirSom());
            JOptionPane.showMessageDialog(null, animal.correr());

        }

    }

}