package Array;

//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//A subarray is a contiguous part of an array.
/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
public class MaximumSubArray {
    public int maxSubArray(int[] nums) {
        int sum = 0;
        int max = nums[0];
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            sum += nums[i];
            if (sum > max)
                max = sum;
            if (sum < 0)
                sum = 0;
        }
        return max;
    }

    public static void main(String[] args) {
        int nums[] = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
        MaximumSubArray subArray = new MaximumSubArray();
        System.out.println(subArray.maxSubArray(nums));
    }

}
