import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class FindPairEqualToGivenSum {

    // brute force solution to iterate through both arrays and adding elements to
    // finf if sum is equal to given sum;
    // Time complexity O(n2)
    // Space Complexity O(1)
    boolean isPairPresentNaive(int arr[], int sum) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == sum) {
                    return true;
                }
            }
        }
        return false;

    }

    // In this approach we will sort the given array first.
    // as array will be sorted, we are sure that last element of array will be
    // largest and first element will be lowest
    // Time complexity O(nlogn)
    // Space complexity O(n/2)
    boolean isPairPresentUsingSort(int arr[], int sum) {
        Arrays.sort(arr);
        int low = 0;
        int high = arr.length - 1;
        // run loop until our low index is less than high index;
        while (low < high) {
            // store the sum of values at low and high index.
            int num = arr[low] + arr[high];
            // if our sum is equal to given sum then return true as we found our pair
            if (num == sum) {
                return true;
            }
            // if our sum is greater, than we need to reduce the high index as high index is
            // starting from highest value
            // if we reduce the high index then the next sum will be low than the current
            // one.
            else if (num > sum) {
                high--;
            }
            // if our sum is small, than we need to increse low index value as low index is
            // starting from low value.
            // if we increase low index then next su,, will be greater than the current sum.
            else {
                low++;
            }
        }
        return false;
    }

    // Time Complexity O(n)
    // Space complecity O(n)
    boolean isPairPresentOptimized(int arr[], int sum) {
        // set to store the diff of each element from the given sum, so that if the
        // element with the diff is found in given array then that means we have a pair
        // in the given array.
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < arr.length; i++) {
            // checking if set contains the element.
            // if element is there then return true;
            if (set.contains(arr[i])) {
                return true;
            }
            // adding the diff b/w element and sum to set.s
            set.add(sum - arr[i]);
        }
        return false;
    }

    public static void main(String[] args) {
        FindPairEqualToGivenSum obj = new FindPairEqualToGivenSum();
        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8 };
        System.out.println(obj.isPairPresentNaive(arr, 20));
        System.out.println(obj.isPairPresentUsingSort(arr, 20));
        System.out.println(obj.isPairPresentOptimized(arr, 20));
    }

}
