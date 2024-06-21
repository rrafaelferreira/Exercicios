import java.util.Scanner;

public class atv1 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
            System.out.println("Digite o nome do aluno:");
            String nome = scanner.nextLine();

            System.out.println("Digite a primeira nota:");
            double nota1 = scanner.nextDouble();

            System.out.println("Digite a segunda nota:");
            double nota2 = scanner.nextDouble();

            double media = (nota1 + nota2) / 2;

            System.out.println("Nome do aluno :" + nome);
            System.out.println("Média Aritmética :" + media);

            scanner.close();
        
    }
}

