public class Cavalo extends Animal {
    public void emitirSom(){
        System.out.println("relincha!");
    }
    public void correr(){
        System.out.println("corre");
    }

    @Override
    public String toString() {
        return "Cavalo{" +
                "Nome='" + Nome + '\'' +
                ", Idade=" + Idade + "anos" +
                '}';
    }
}
