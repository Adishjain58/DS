package Array;

//Given an array, rotate the array to the right by k steps, where k is non-negative.
public class RotateArray {
    // main logic is that if we add a number to index and then find modulus by size
    // then the index will always remain in the array and the resulting value will
    // be the shifted index of the number.
    int[] rotateArray(int nums[], int k) {
        int len = nums.length;
        int res[] = new int[len];
        for (int i = 0; i < len; i++) {
            res[(i + k) % len] = nums[i];
        }
        return res;
    }

    int[] rotateArrayInPlaceOn(int nums[], int k) {
        int len = nums.length;
        int res[] = nums.clone();
        for (int i = 0; i < len; i++) {
            nums[(i + k) % len] = res[i];
        }
        return nums;
    }

    public static void main(String[] args) {
        RotateArray rotateArray = new RotateArray();
        int nums[] = { 1, 2, 3, 4, 5, 6, 7 };
        int k = 3;
        int res[] = rotateArray.rotateArray(nums, k);
        for (int num : res) {
            System.out.print(num + " ");
        }
        System.out.println();
        res = rotateArray.rotateArrayInPlaceOn(nums, k);
        for (int num : res) {
            System.out.print(num + " ");
        }
        System.out.println();
        k = 4;
        int nums2[] = { 1, 2, 3 };
        res = rotateArray.rotateArray(nums2, k);
        for (int num : res) {
            System.out.print(num + " ");
        }
        System.out.println();
        res = rotateArray.rotateArrayInPlaceOn(nums2, k);
        for (int num : res) {
            System.out.print(num + " ");
        }
    }

}
