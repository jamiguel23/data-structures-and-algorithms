# Romanize

## Challenge

Given a number return the roman numeral version of that number. You are given an object with the key value pairs of the letter denomination and the number correlating to that letter as a value.

## Approach

Using a for of loop to iterate through the object. Use nested loop to add to an empty string as well as subtracting the added value of that string from the number that is given as an argument. Returning the new string at the end of the operation.

## Stretch Goals

The given object will have the decrementing values, meaning values like 4/'IV' and 9/'IX' will included. Remove these key value pairs to give harder challenge.


## Big O

- Time: O(n) for the worst case
- Space O(1), no added space needed
