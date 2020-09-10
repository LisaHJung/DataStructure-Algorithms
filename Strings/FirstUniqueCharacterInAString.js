Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.

Solution

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash= {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        hash[char] = hash[char] + 1 || 1
    }
    
    for ( let i = 0; i < s.length; i++) {
        const char = s[i]
        if (hash[char] === 1){
            return i
     }
   }
    return - 1
};

// while hash is not ordered, by iterating through the string, you can still find the first unique letter in order!