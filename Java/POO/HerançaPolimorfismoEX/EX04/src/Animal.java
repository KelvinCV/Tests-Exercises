public abstract class Animal {
    public String Nome;
    public int Idade;

    public Object emitirSom(){

        return null;
    }
    public Object correr(){

        return null;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public int getIdade() {
        return Idade;
    }

    public void setIdade(int idade) {
        Idade = idade;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "Nome='" + Nome + '\'' +
                ", Idade=" + Idade +
                '}';
    }
}
