package Recursion;

// For explannation refer Factorial.js
public class Factorial {

    int factorialUsingIterative(int num) {
        int res = 1;
        for (int i = 1; i <= num; i++) {
            res *= i;
        }
        return res;
    }

    int factorialUsingRecursion(int num) {
        if (num == 1) {
            return num;
        }
        return num * factorialUsingRecursion(num - 1);
    }

    public static void main(String[] args) {
        Factorial factorial = new Factorial();
        System.out.println(factorial.factorialUsingIterative(6));
        System.out.println(factorial.factorialUsingRecursion(6));
    }

}
