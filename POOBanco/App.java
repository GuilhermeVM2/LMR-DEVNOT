package POOBanco;

import java.util.Random;
import java.util.Scanner;

import javax.swing.JOptionPane;

public class App {
    //poc
    public static void main(String[] args) {
        Random rd = new Random();
        // criar um array de objetos
        TipoConta conta[] = new TipoConta[1];
        // criar e preencher os objetos
        boolean ligado = true;
        Scanner sc = new Scanner(System.in);
        int acao = 0;
        while (ligado) {
            for (int i = 0; i < conta.length; i++) {
            System.out.println("Escolha a ação desejada:\n"
                    + "1. Criar Conta\n"
                    + "2. Acessar Conta\n"
                    + "3. Sair\n");
        int atuacao = sc.nextInt();
      
        switch (atuacao) {
            case 1:
                System.out.println("DIgite o CPF ou CNPJ");
                
                
                break;
            case 2:
            System.out.println("Capacidade2");
                break;
            case 3:
            System.out.println("Capacidade3");
                break;

            default:
                JOptionPane.showMessageDialog(null,"Informe uma Ação válida");
                break;
        }  
        }
    }


    }
}
