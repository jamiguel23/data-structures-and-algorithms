# insertion-sort
## Psuedo Code


![pseudo](./26psudo.PNG)

## Process

### Pass 1 

![pass1](/js-401/insertionSort/img/cc26-1.PNG)

In the first pass through of the for loop is set to index of 1 and j is assigned i - 1 which in this case is index 0. We are also setting the temp value to array at index i which is the value 4 in this pass.  The assigned values are i=4, j=8 and temp=4. The while loop will now do som validating while j is less than or equal to 0 AND temp is less than array at index j, the while loop with compare the values of i and j. The values will then swap if j is greater than i. In this first pass a swap will occur because j is greater than i. 

### Pass 2

![pass2](/js-401/insertionSort/img/cc26-2.PNG)

The second pass through will not hit the while loop because j is less than so the values will stay the same.

### Pass 3

![pass3](/js-401/insertionSort/img/cc26-3.PNG)

The third pass through will not hit the while loop because j is less than so the values will stay the same.

### Pass 4

![pass4](/js-401/insertionSort/img/cc26-4.PNG)

This pass through gets cool. j in this pass is greater than i so they will do a swap. The while loop will hit a second time because in the while loop the index of j is subtracting by 1 it is now in the 2 place which has the value of 23. These 2 indexes now swag, coming out of the while loop and returning the most iteration of the array.

![pass5](/js-401/insertionSort/img/cc26-5.PNG)

The last pass through the same logic will be the same as pass 4 but the while loop will happen one more time.

## Big O

the time efficiency is O(n^2) since there is nest for loop <br>

the space complexity of O(1)
