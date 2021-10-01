public class Veterinario extends Animal {
    public void examinar(Cachorro cachorro, Cavalo cavalo, Preguica preguica) {
        cachorro.emitirSom();
        cavalo.emitirSom();
        preguica.emitirSom();

    }
}
