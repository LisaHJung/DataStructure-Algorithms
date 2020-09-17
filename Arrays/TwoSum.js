// Write a function that takes in a non-empty array of distint integers and an integer representing a target sum. 
// If any two number in the input array sum up to the target sum, the function should return them in an array, in any order. 
// If no two numbers sum up to the target sum, the function should return an empty array. 

// array = [3, 5, -4, 8. 11. 1. -1. 6]
// targetSum = 10

// samle output
// [-1,11]

Solution

function twoNumberSum(array, targetSum) {
    const nums = {}
      for (const num of array) {
          const match = targetSum - num
          if (match in nums) {
              return [match, num]
          } else {
              nums[num] = true
          }
      }
      return []
      }