package StackAndQueue;

import java.util.ArrayList;
import java.util.List;

class StackUsingArrayList<T> {

    List<T> list;

    boolean isEmpty() {
        return (this.list.size() == 0 ? true : false);
    }

    int size() {
        return this.list.size();
    }

    StackUsingArrayList() {
        list = new ArrayList<>();
    }

    boolean push(T value) {

        this.list.add(value);
        System.out.println(value + " pushed into stack");
        return true;
    }

    T pop() {
        if (this.list.size() <= 0) {
            System.out.println("Stack Underflow");
            return null;
        } else {
            T topElement = this.list.get(this.list.size() - 1);
            this.list.remove(this.list.size() - 1);
            return topElement;
        }
    }

    T peek() {
        if (this.list.size() <= 0) {
            System.out.println("Stack Underflow");
            return null;
        } else {
            T topElement = this.list.get(this.list.size() - 1);
            return topElement;
        }
    }

    void print() {
        for (int i = this.list.size() - 1; i >= 0; i--) {
            System.out.print(" " + this.list.get(i));
        }
    }
}

// Driver code
class Main {
    public static void main(String args[]) {
        StackUsingArrayList<Integer> s = new StackUsingArrayList<>();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s.pop() + " Popped from stack");
        s.push(40);
        System.out.println("Top element is :" + s.peek());
        System.out.print("Elements present in stack :");
        s.print();
    }
}
