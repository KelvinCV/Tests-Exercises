public class Main {
    public static void main(String[] args){
        Cachorro cachorro = new Cachorro();
        cachorro.toString();
        Cavalo cavalo = new Cavalo();
        cavalo.toString();
        Preguica preguica = new Preguica();
        preguica.toString();

        Veterinario veterinario = new Veterinario();
        veterinario.examinar(cachorro,cavalo,preguica);

    }
}
