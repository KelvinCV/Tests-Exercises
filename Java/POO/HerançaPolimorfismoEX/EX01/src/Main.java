public class Main {
    public static void main(String[] args){
        Cachorro cachorro = new Cachorro();
        cachorro.toString();
        Cavalo cavalo = new Cavalo();
        cavalo.toString();
        Preguica preguica = new Preguica();
        preguica.toString();

        cachorro.setNome("Antônio");
        cachorro.setIdade(2);
        cavalo.setNome("Carlos");
        cavalo.setIdade(3);
        preguica.setNome("Jobim");
        preguica.setIdade(4);

        System.out.println(cachorro);
        cachorro.emitirSom();
        cachorro.correr();
        System.out.println(cavalo);
        cavalo.emitirSom();
        cavalo.correr();
        System.out.println(preguica);
        preguica.emitirSom();
        preguica.subirEmArvore();
    }
}
