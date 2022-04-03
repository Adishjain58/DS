/*
-> Whenever node encounters a asynchronous opearation the main thread delegates that task to other thread to process it and continue executing the code. When the operation is completed,
it gets added to one of the callback queues.

To handle asynchronous operations node uses an event loop which uses different types of queues(which all comes under callback queues) to process different type of asynchronous operations.
-> Event loop only starts working after the call stack is empty.
-> Each iteration of an event loop is called a tick.
-> It won't process callback queues until all the synchronous operations are executed from the call stack.
-> When event loop sees that the call stack is empty then based on the priority it will pick an operation from one of the queues and put it in call stack to execute it.

Different type of queues:-
-> IO queue :- This queue contains operations which are related to file operartions. When the operation is completed, they are trasferred to IO callback queue.
-> Timer queue :- This queue contains operations executed by setTimeout or setInterval, JS(V8 engine) by itself doesn't ahs this functionality for this JS uses
   Web api which is provided by browsers which contains these methods. When the timer of setTimeout or setInterval is completed, they are transferred to timer callback queue.
-> MicroTask queue :- This queue is broken down into 2 queues. First queue holds the functions delayed by process.nextTick, process.nextTick is a function that executes a function
   at the next tick (a.k.a, the next iteration of the event loop) and the Second queue holds the functions delayed by promises. This queue has the highest priority.
   One important feature to note about the microtask queue is that the event loop repeatedly checks and executes functions in the microtask queue before attending to other queues.
   For instance, when the microtask queue is completed, and, say, a timer operation performs a promise operation, the event loop would attend to that promise operation before
   moving on to the other functions in the timer queue.
-> Check queue :- The functions which are executed using setImmediate() function are added to this queue. The queue is executed immediately after all callback functions
   in the IO queue have been executed.
-> Close queue :- This queue stores functions that are associated with close event operations i.e. events triggered by some operations when they are finished.
   This is the least priority queue.


 Order of the queues
->The microtask queue is given top priority, followed by the timer queue, the I/O queue, the check queue, and, lastly, the close queue.

Three things to note here:

->The asynchronous operations depend on their duration before they are added to the queues. They do not depend on the order in which they are placed in the program.
->The event loop continually checks the microtask queues before proceeding with other queues at every iteration.
->The event loop executed the functions in the check queue even when there was another IO operation (readFile) in the background. It did so because, at that point, the IO queue was empty.
  Remember that the check queue callbacks are run immediately after all the functions in the IO queue have been executed.
*/
