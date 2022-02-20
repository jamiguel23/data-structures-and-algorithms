# hashtable


## Challenge
Implement a Hashtable Class with the following methods:

- set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
- get
Arguments: key
Returns: Value associated with that key in the table
- contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
- keys
Returns: Collection of keys
- hash
Arguments: key
Returns: Index in the collection for that key

## Approach & Efficiency
After following the recoding I was able to recreate it in this file. This, I think is my favorite DSA so far because of the possibilities  of how much faster this is to retrevie the data than a linked list or a tree. Most of the big O complexity will fall in O(1).

