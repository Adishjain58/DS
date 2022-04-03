package Array;

public class MoveZeroes {

    int[] moveZeroesNaive(int[] nums) {
        int len = nums.length;
        int size = nums.length - 1;
        // run a loop from i=0 until it is less than lan variable.
        for (int i = 0; i < len;) {
            // if nums[i]==0 then left shift all elements one place from i+1 index;
            if (nums[i] == 0) {
                for (int j = i + 1; j < len; j++) {
                    nums[j - 1] = nums[j];
                }
                // After the values are shifted set 0 from the last index and keep it decreasing
                // after updating index value with 0.
                nums[size--] = 0;
                // reset i so that we won't skip elements as the elemets are left shifted.
                i = 0;
                // decrease len by 1 because at end we have set value to 0. So, we don't need to
                // again check until last of array.
                len--;
            }
            // if nums[i]!=0 then increment value of i
            else {
                i++;
            }
        }
        return nums;
    };

    // in this solution the main approach is, we will count the total no of zeroes
    // in the array and take onr varaiable whose value is zero and whenever we
    // encounter a non-zero number we set it's value to the variable we stored 0 and
    // increase by 1. So that all non-zero number will be set from beggining of
    // array. and at the end update last indexes if array with no of zeroes.
    int[] moveZeroesMoreOptimized(int[] nums) {
        // variable to store the initial index.
        int initial = 0;
        int size = nums.length - 1;
        int noOfZeroes = 0;
        for (int i = 0; i < nums.length; i++) {
            // if nums[i]==0 then increase noOfZeroes varaiable value by 1.
            if (nums[i] == 0) {
                noOfZeroes++;
            }
            // if nums[i]!=0 then start setting initial index value to current index value
            // and increment initial by 1.
            else {
                nums[initial++] = nums[i];
            }
        }
        // at the end replacing array values with 0 from the last index as per the total
        // no of zeroes we have.
        for (int i = 0; i < noOfZeroes; i++) {
            nums[size--] = 0;
        }
        return nums;

    }

    public static void main(String[] args) {
        MoveZeroes moveZeroes = new MoveZeroes();
        int nums[] = { 0, 0, 1 };
        int res[] = moveZeroes.moveZeroesNaive(nums);
        for (int num : res) {
            System.out.println(num);
        }
        res = moveZeroes.moveZeroesMoreOptimized(nums);
        for (int num : res) {
            System.out.println(num);
        }

    }
}
