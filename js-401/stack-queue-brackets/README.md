# Coding Challenge 13

## Feature

  - Write a function called validate brackets
    Arguments: string
    Return: boolean
     representing whether or not the brackets in the string are balanced


-  There are 3 types of brackets:
  Round Brackets : ()
  Square Brackets : []
  Curly Brackets : {}


## Approach
We need to isolate the opening brackets but pushing them into a stack then compare them to the remaining closing tags that are still in the original string. Though this approach works, I can't help but think there is an easier way to wrote it because how it is written how there are multiple else if statements that were difficult to keep track of

## Testing

    npm test
