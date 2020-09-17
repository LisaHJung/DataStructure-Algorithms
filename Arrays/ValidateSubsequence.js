// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first onemptied. 

// Sample Input 
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1,6,-1,10]

// Solution

function isValidSubsequence(array, sequence) {
    let arrayIndex = 0
      let sequenceIndex = 0
      while (arrayIndex < array.length && sequenceIndex < sequence.length) {
          if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++
          arrayIndex++
      }
      return sequenceIndex === sequence.length
  }