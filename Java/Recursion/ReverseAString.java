package Recursion;

// For explanation refer ReverseAString.js
public class ReverseAString {
    String res = "";

    String reverseStringRecursion(String str, int index) {
        if (index == str.length()) {
            return "";
        }
        reverseStringRecursion(str, index + 1);
        return res += str.charAt(index);
    }

    public static void main(String[] args) {
        ReverseAString reverseAString = new ReverseAString();
        System.out.println(reverseAString.reverseStringRecursion("Test", 0));
    }

}
