public class Zoologico {
    private Animal[] jaulas;

    public Zoologico(int quantidade) {
        this.jaulas = new Animal[quantidade];
    }

    public Zoologico() {
        this.jaulas = new Animal[10];
    }

    public Animal[] getJaulas() {
        return jaulas;
    }

    public void setJaulas(Animal[] jaulas) {
        this.jaulas = jaulas;
    }

}