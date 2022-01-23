# stack-and-queues

## Approach

This one came a little bit easier than the previous coding challenges. I was able to follow along with Jacob during lecture and finished pop, push, enqueue and dequeue. Peek and isEmpty was basically the same so it was just a matter of changing variable names.

## Features

- Stack
  - Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to top when the stack is created.
  - The class should contain the following methods:
    - push
      Arguments: value  
       adds a new node with that value to the top of the stack with an O(1) Time performance.
    - pop
      Arguments: none
      Returns: the value from node from the top of the stack
      Removes the node from the top of the stack
      Should raise exception when called on empty stack
    - peek
      Arguments: none
      Returns: Value of the node located at the top of the stack
      Should raise exception when called on empty stack
    - is empty
      Arguments: none
      Returns: Boolean indicating whether or not the stack is empty.
- Queue
  - Create a Queue class that has a front property. It creates an empty Queue when instantiated.
    This object should be aware of a default empty value assigned to front when the queue is created.
    The class should contain the following methods:
    - enqueue
      Arguments: value
      adds a new node with that value to the back of the queue with an O(1) Time performance.
    - dequeue
      Arguments: none
      Returns: the value from node from the front of the queue
      Removes the node from the front of the queue
      Should raise exception when called on empty queue
    - peek
      Arguments: none
      Returns: Value of the node located at the front of the queue
      Should raise exception when called on empty stack
    - is empty
      Arguments: none
      Returns: Boolean indicating whether or not the queue is empty
      You have access to the Node class and all the properties on the Linked List class.

## Testing
In terminal:

    npm i
    npm run test
