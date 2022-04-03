package Array;

public class LongestWord {

    String getLongestWord(String str) {
        str = str.replaceAll("[^0-9a-zA-Z ]", "");
        String arr[] = str.split(" ");
        int max = 0, index = 0;
        for (int i = 0; i < arr.length; i++) {
            int len = arr[i].length();
            if (len > max) {
                max = len;
                index = i;
            }
        }
        return arr[index];
    }

    public static void main(String[] args) {
        LongestWord longestWord = new LongestWord();
        System.out.println(longestWord.getLongestWord("fun&!! time"));
    }

}
