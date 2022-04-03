package Sorting;

// for explanation refer SlectionSort.js
public class SelectionSort {

    int[] selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int min = arr[i];
            int index = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < min) {
                    min = arr[j];
                    index = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        SelectionSort selectionSort = new SelectionSort();
        int arr[] = { 5, 1, 40, 20, 30, 11, 4 };
        int res[] = selectionSort.selectionSort(arr);
        for (int elem : res) {
            System.out.print(elem + " ");
        }
    }
}
