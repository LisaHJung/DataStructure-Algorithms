Write a function that takes in a non-empty string and that returns a boolean representing wehther the string is a palindrome.
A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes. 

Sample Input
string = "abcdcba"

Sample output
true

Solution

function isPalindrome(string) {
    const reversedString = []
    for (let i = string.length - 1; i >= 0; i--){
        reversedString.push(string[i])
    }
       return string === reversedString.join('')
   }