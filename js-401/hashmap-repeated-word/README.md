# Hashmap repeated word



## Challenge
- Write a function called repeated word that finds the first word to occur more than once in a string
- Arguments: string
- Return: string

## Approach & Efficiency

My first approach was to do a nested for loop to find the repeat word. Wrote it out but then realized that we needed to use a hash table within the scope of the  function (duh). Using the hash table did make it easier to use since there was the the contains and set methods already made. With the collaboration with Michael Metcalf and Ryan Lee, we were able to deduce that we need to incorporate regex to the solution.
