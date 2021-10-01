public class Cavalo extends Animal {
    public Object emitirSom(){
        System.out.println("relincha!");

        return null;
    }
    public Object correr(){
        System.out.println("corre");

        return null;
    }

    @Override
    public String toString() {
        return "Cavalo{" +
                "Nome='" + Nome + '\'' +
                ", Idade=" + Idade + "anos" +
                '}';
    }
}
