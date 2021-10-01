public class Preguica extends Animal{
    public void emitirSom(){
        System.out.println("....(emite som desconhecido)");
    }
    public void subirEmArvore(){
        System.out.println("sobe em árvore");
    }

    @Override
    public String toString() {
        return "Preguica{" +
                "Nome='" + Nome + '\'' +
                ", Idade=" + Idade + "anos" +
                '}';
    }
}
