package Array;

public class MergeSortedArrays {

    int[] mergeSortedArray(int[] arr1, int arr2[]) {
        int len1 = arr1.length, len2 = arr2.length;
        if (len1 == 0) {
            return arr2;
        }
        if (len2 == 0) {
            return arr1;
        }
        int sortedArray[] = new int[len1 + len2];
        int index = 0, i = 0, j = 0;
        // run a loop until we reached to the end of either of arrays
        while (i < len1 && j < len2) {
            if (arr1[i] < arr2[j]) {
                sortedArray[index++] = arr1[i++];
            } else {
                sortedArray[index++] = arr2[j++];
            }
        }

        // After we come out of loop, there are chances that all the elements of both
        // arrays were not added to new array.

        // Run loop until current element index is less than 1st array.length so that
        // any left items can be added
        while (i < len1) {
            sortedArray[index++] = arr1[i++];
        }
        // Run loop until current element index is less than 2st array.length so that
        // any left items can be added
        while (j < len2) {
            sortedArray[index++] = arr2[j++];
        }

        // Note:- At the end the reason why we didn't need to compare values again is
        // because when we come out of first while loop there can only be one array who
        // hasn't been iterated completely.
        return sortedArray;
    }

    public static void main(String[] args) {
        MergeSortedArrays sortedArrays = new MergeSortedArrays();
        int arr1[] = { 1, 2, 3, 5, 40, 50 };
        int arr2[] = { 1, 2, 4, 6, 30 };
        int res[] = sortedArrays.mergeSortedArray(arr1, arr2);
        for (int num : res) {
            System.out.print(num + " ");
        }
    }

}
