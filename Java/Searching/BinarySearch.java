package Searching;

import Sorting.MergeSort;

// For explanantion refer BinarySearch.js
public class BinarySearch {

    public boolean binarySearch(int arr[], int val) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == val) {
                return true;
            } else if (val < arr[mid]) {
                right--;
            } else {
                left++;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        BinarySearch binarySearch = new BinarySearch();
        MergeSort mergeSort = new MergeSort();
        int arr[] = { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
        System.out.println(binarySearch.binarySearch(mergeSort.mergeSort(arr), 200));
    }

}
