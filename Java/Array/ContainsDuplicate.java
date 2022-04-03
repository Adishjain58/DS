package Array;

import java.util.HashMap;
import java.util.Map;

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
public class ContainsDuplicate {

    boolean containsDuplicate(int[] nums) {
        Map<Integer, Boolean> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (map.get(nums[i]) != null) {
                return true;
            } else {
                map.put(nums[i], true);
            }
        }
        return false;
    }

    public static void main(String[] args) {
        ContainsDuplicate containsDuplicate = new ContainsDuplicate();
        int nums[] = { 1, 2, 3, 4 };
        System.out.println(containsDuplicate.containsDuplicate(nums));
        int nums2[] = { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 };
        System.out.println(containsDuplicate.containsDuplicate(nums2));
    }
}
