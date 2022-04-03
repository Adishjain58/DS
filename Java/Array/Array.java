package Array;

import java.util.HashMap;
import java.util.Map;

// Custom Array Creation in JAVA
/*
Advantages:-
Fast lookups
fast push/pop
Ordered

Disadvantages:-
Slow inserts
Slow deletes
fixed Size(in case if static array)

*/
public class Array {
    int length;
    Map<Integer, Integer> map;

    Array() {
        this.length = 0;
        this.map = new HashMap<>();
    }

    void push(int item) {
        this.map.put(this.length, item);
        this.length++;
    }

    void pop() {
        this.map.remove(this.length - 1);
        this.length--;
    }

    int get(int index) {
        return this.map.get(index);
    }

    void shift() {
        this.shiftItemsToLeft(0);
    }

    void remove(int index) {
        this.shiftItemsToLeft(index);
    }

    void insert(int index, int item) {
        shiftItemsToRight(index);
        this.map.put(index, item);
    }

    void unshift(int item) {
        shiftItemsToRight(0);
        this.map.put(0, item);
    }

    void shiftItemsToLeft(int index) {
        for (int i = index; i < this.length - 1; i++) {
            this.map.put(i, this.map.get(i + 1));
        }
        this.map.remove(this.length - 1);
        this.length--;
    }

    void shiftItemsToRight(int index) {
        for (int i = this.length; i > index; i--) {
            this.map.put(i, this.map.get(i - 1));
        }
        this.length++;
    }

    public static void main(String[] args) {
        Array array = new Array();
        array.push(1);
        array.push(2);
        array.pop();
        array.push(3);
        array.shift();
        array.unshift(2);
        array.insert(2, 5);
        array.insert(1, 6);
        array.remove(1);
        System.out.println(array.get(0));
        System.out.println(array.map.toString());
    }

}
