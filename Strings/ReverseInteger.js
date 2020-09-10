question: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Solution
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const reversed = x.toString().split('').reverse().join('')
     return Math.sign(x) * parseInt(reversed)
};

// let x  = -5432100
// x.toString = "-5432100"
// x.toString().split('') = [-,'5', '4', '3', '2', '1', '0', '0']
// x.toString().split('').reverse() = ['0', '0', '1', '2', '3', '4', '5', '-']
// x.toString().split('').reverse().join('') = ['0012345-']
// parseInt(reversed) - converts string into integer and removes leading 0s
// Math.sign(x) - multiplies the string converted to integer times the sign of original number. 