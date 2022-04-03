package Sorting;

// for explanation refer BubbleSort.js
public class BubbleSort {

    int[] bubbleSort(int arr[]) {
        for (int i = arr.length - 1; i >= 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr[j + 1] < arr[j]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        BubbleSort bubbleSort = new BubbleSort();
        int arr[] = { 5, 1, 40, 20, 30, 11, 4 };
        int res[] = bubbleSort.bubbleSort(arr);
        for (int elem : res) {
            System.out.print(elem + " ");
        }
    }

}
