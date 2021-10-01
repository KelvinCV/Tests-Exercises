public class Cachorro extends Animal {
    public Object emitirSom(){
        System.out.println("late!");

        return null;
    }
    public Object correr(){
        System.out.println("corre");
        return null;
    }

    @Override
    public String toString() {
        return "Cachorro{" +
                "Nome='" + Nome + '\'' +
                ", Idade=" + Idade + "anos" +
                '}';
    }
}
