
package BlocosDeNota.Elevador;
public class Elevador{
    //atributos
    private int andarAtual;

    //metodos
    //construtor
    public Elevador(int andarAtual){
        this.andarAtual = 0;
    }

    //gets and setters
    public int getAndarAtual(){
        return andarAtual;
    }

    public void setAndarAtual(int andarAtual){
        this.andarAtual = andarAtual;
    }
}