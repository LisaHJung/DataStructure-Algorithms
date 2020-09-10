Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 
Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]


Solution: 
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0
    let end = s.length-1
  
    while (start < end) {
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        start ++
        end--    
    }
};

Notes:
// even though this is a called a string, it's not a string. It's an array.
// In JS, string are immutable but elements of an array can be changed. If this were "hello", then different technique"
// Have two different pointers at once. Pointers: references two different elements at once
// Pick first and last element and swap and move in one element in from each side
// Output: ["o","l","l","e","h"]
// First pointer is start = o
// Second pointer is end = h
// intuition maybe be make end equal to start vice versa, problem with that if you make start equal to end, when you make start equal to end, then try to make end equal to start, it doesn't work because we overworte the value already. 
// create another variable temp and initialize it with whatever start is. 
// make start equal to end 
// end equal to whatever temp is
// now variables successfully swapped. 

// let start be the beginning of the array
// let end be the end of the array

// Create a while loop to continue until start is no longer less than end
// crete a temporary variable to capture the first letter
    // let temp equal s[start] which would be the letter h
    // let start to equal whatever end is
    // end to be whatever start was. start is held in temp variable
    // increment the start pointer and decrement the end pointer
    // loop is going to continue until start is no longer less than end
    // 
