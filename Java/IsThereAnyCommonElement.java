import java.util.HashMap;
import java.util.Map;

public class IsThereAnyCommonElement {

    boolean isThereAnyCommonElement(char arr[], char arr2[]) {
        Map<Character, Character> map = new HashMap<>();
        for (char ch : arr) {
            if (map.get(ch) == null) {
                map.put(ch, ch);
            }
        }

        for (char ch : arr2) {
            if (map.get(ch) != null) {
                return true;
            }
        }
        return false;
    }

    boolean isThereAnyCommonElementNaive(char arr[], char arr2[]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if (arr[i] == arr2[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        IsThereAnyCommonElement obj = new IsThereAnyCommonElement();
        char arr[] = { 'a', 'b', 'c', 'd' };
        char arr2[] = { 'e', 'f', 'g', 'h' };
        System.out.println(obj.isThereAnyCommonElement(arr, arr2));
        System.out.println(obj.isThereAnyCommonElementNaive(arr, arr2));
    }
}
