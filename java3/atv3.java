import java.util.Scanner;

public class atv3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String senhaPreConfigurada = "senha123";

        System.out.print("Digite a senha: ");
        String senha = scanner.nextLine();

        if (senha.equals(senhaPreConfigurada)) {
            System.out.println("PORTA ABERTA");
        } else {
            System.out.println("SENHA NAO CONFERE");
        }

        scanner.close();
    }
}
