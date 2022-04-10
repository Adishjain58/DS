package Sorting;

// for explanation refer MergeSort.js
public class MergeSort {

    public int[] mergeSort(int arr[]) {
        if (arr.length == 1) {
            return arr;
        }

        int mid = arr.length / 2;
        int[] left = new int[mid];
        int right[] = new int[arr.length - mid];
        for (int i = 0; i < mid; i++) {
            left[i] = arr[i];
        }
        int index = 0;
        for (int j = mid; j < arr.length; j++) {
            right[index++] = arr[j];
        }

        return merge(mergeSort(left), mergeSort(right));
    }

    int[] merge(int[] left, int[] right) {
        int res[] = new int[left.length + right.length];
        int i = 0, j = 0;
        int index = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                res[index++] = left[i++];
            } else {
                res[index++] = right[j++];
            }
        }

        while (i < left.length) {
            res[index++] = left[i++];
        }

        while (j < right.length) {
            res[index++] = right[j++];
        }

        return res;
    }

    public static void main(String[] args) {
        MergeSort mergeSort = new MergeSort();
        int arr[] = { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
        int res[] = mergeSort.mergeSort(arr);
        for (int elem : res) {
            System.out.print(elem + " ");
        }
    }
}
