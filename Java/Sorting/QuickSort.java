package Sorting;

// for explanation refer QuickSort.js
public class QuickSort {

    int[] quickSort(int[] arr, int left, int right) {
        int pivot;
        int partitionIndex;
        if (left < right) {
            pivot = right;
            partitionIndex = getFinalPivot(arr, left, pivot);
            quickSort(arr, left, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, right);
        }

        return arr;
    }

    int getFinalPivot(int arr[], int left, int pivot) {

        for (int i = left; i < pivot;) {

            if (arr[i] > arr[pivot]) {
                if (i == pivot - 1) {
                    int temp2 = arr[i];
                    arr[i] = arr[pivot];
                    arr[pivot] = temp2;
                } else {
                    int temp = arr[pivot - 1];
                    arr[pivot - 1] = arr[pivot];
                    arr[pivot] = arr[i];
                    arr[i] = temp;
                }
                pivot--;
            } else {
                i++;
            }

        }
        return pivot;
    }

    public static void main(String[] args) {
        QuickSort quickSort = new QuickSort();
        int arr[] = { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
        int res[] = quickSort.quickSort(arr, 0, arr.length - 1);
        for (int elem : res) {
            System.out.print(elem + " ");
        }
    }

}
