package Array;

// For more implementation refer Array Folder of js
public class ReverseAString {

    String reverse(String str) {
        char ch[] = str.toCharArray();
        char reverseChar[] = new char[ch.length];
        int start = 0;
        for (int i = ch.length - 1; i >= 0; i--) {
            reverseChar[start] = ch[i];
            start++;
        }

        return new String(reverseChar);
    }

    public static void main(String[] args) {
        ReverseAString reverse = new ReverseAString();
        System.out.println(
                reverse.reverse("Hi, How are you"));
    }

}
