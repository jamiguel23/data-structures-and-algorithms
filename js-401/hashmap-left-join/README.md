# hashmap-left-join 



## Challenge
- Write a function that LEFT JOINs two hashmaps into a single data structure.

- Write a function called left join
    - Arguments: two hash maps
      - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
      - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency

Having the sample output helped a ton with this coding challenge. Noticed that the output data was multiple arrays inside and array. The key values pairs were inside the array as well as a second value that was in the second hashmap. I wanted to iterate through the first hashtable and then push those keys and values in an array. while the keys were available, I used the .contain() method on the second hashtable to see if the same key was used in it. If it was I  would push that value into the array. 

## Collaboration

Michael Metcalf


