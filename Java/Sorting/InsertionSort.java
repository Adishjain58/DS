package Sorting;

// For explanantion refer InsersionSort.js
public class InsertionSort {

    int[] insertionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[i]) {
                    moveElementsToRightAndSwap(arr, i, j);
                    break;
                }
            }
        }
        return arr;
    };

    void moveElementsToRightAndSwap(int[] arr, int i, int j) {
        int elem = arr[i];
        for (int k = i; k > j; k--) {
            arr[k] = arr[k - 1];
        }
        arr[j] = elem;
    };

    public static void main(String[] args) {
        InsertionSort insertionSort = new InsertionSort();
        int arr[] = { 5, 1, 40, 20, 30, 11, 4 };
        int res[] = insertionSort.insertionSort(arr);
        for (int elem : res) {
            System.out.print(elem + " ");
        }
    }

}
