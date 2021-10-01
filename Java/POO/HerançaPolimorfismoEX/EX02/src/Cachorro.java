public class Cachorro extends Animal {
    public void emitirSom(){
        System.out.println("late!");
    }
    public void correr(){
        System.out.println("corre");
    }

    @Override
    public String toString() {
        return "Cachorro{" +
                "Nome='" + Nome + '\'' +
                ", Idade=" + Idade + "anos" +
                '}';
    }
}
