package HashTable;

import java.util.HashMap;
import java.util.Map;

// For logic comments and details refer js exercise for same problem
public class FirstRecurringElement {

    Integer getFirstRecurringchar(int arr[]) {
        Map<Integer, Boolean> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            if (map.get(arr[i]) != null) {
                return arr[i];
            } else {
                map.put(arr[i], true);
            }
        }
        return null;
    }

    public static void main(String[] args) {
        FirstRecurringElement firstRecurringElement = new FirstRecurringElement();
        int arr[] = { 1, 2, 3, 4, 5 };
        System.out.println(firstRecurringElement.getFirstRecurringchar(arr));
        int arr2[] = { 1, 2, 1, 4, 6, 2 };
        System.out.println(firstRecurringElement.getFirstRecurringchar(arr2));
    }

}
