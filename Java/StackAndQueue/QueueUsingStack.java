package StackAndQueue;

public class QueueUsingStack<T> {
    StackUsingArrayList<T> initial;
    StackUsingArrayList<T> reverse;

    QueueUsingStack() {
        initial = new StackUsingArrayList<>();
        reverse = new StackUsingArrayList<>();
    }

    // So here the logic is that we will use two stacks, when we are inserting an
    // element at that time empty first stack and add all elements to second stack.
    // Add the element in first stack and then push back all elements from second
    // stck to first stack
    void enqueue(T value) {
        while (this.initial.size() != 0) {
            this.reverse.push(this.initial.pop());
        }
        this.initial.push(value);
        while (this.reverse.size() != 0) {
            this.initial.push(this.reverse.pop());
        }
        System.out.println("Finish");
    }

    // pop the element from the first stack.
    void dequeue() {
        if (this.initial.size() == 0) {
            System.out.println("Queue is empty");
        } else {
            System.out.println(this.initial.pop());
        }
    }

    public static void main(String[] args) {
        QueueUsingStack<Integer> queueUsingStack = new QueueUsingStack<>();
        queueUsingStack.enqueue(1);
        queueUsingStack.enqueue(2);
    }
}
