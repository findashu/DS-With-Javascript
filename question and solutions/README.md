## Tasks to your mind :pouting_cat: 👍
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie

**Note** Try to solve by your own and then check the solution or compare with your own. 💯


### 1. Implement an algorithm to determine if a string has all unique characters, what if you can not use additional data structures?

### 2. Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even. Give your answer in string format as 'odd' or 'even'. If the input array is empty consider it as: [0] (array with a zero).

    Examples:
    oddorEven([0]) returns "even"
    oddorEven([2,5,24]) returns "odd"
    oddOrEven([0, -1, -5]) returns "even"

### 3. Write a function that sums all numbers in an array that can have nested sub-arrays. Do not use loops.

    Example:
    sumOfNestedArray([1,[11,42,[8, 1], 4, [22,21]]]) returns 110

### 4. Write a function that generates all possible combinations of 1 and 0 for n bits. For example, if the function receives 2 as the number of bits, it should produce the following 4 combinations: 00,01,10,11. You cannot use any mathematical operators.

### 5. Given a list first and a number N, create a new list that contains each number of first at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

    Examples:
    deleteNth ([1,1,1,1],2) // return [1,1]
    deleteNth ([20,37,20,21],1) // return [20,37,21]
    deleteNth([1,1,3,3,7,2,2,2,2], 3) // return [1, 1, 3, 3, 7, 2, 2, 2]

### 6. You will be given a number and you will need to return it as a string in Expanded Form. For example: 

    Examples:
    
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

### 7. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement a function ```likes :: [String] -> String```, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
```js
    likes [] // must be "no one likes this"
    likes ["Peter"] // must be "Peter likes this"
    likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
```