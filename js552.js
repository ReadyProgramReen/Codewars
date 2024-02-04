// Question :Largest pair sum in array    

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.


// Answer :
// function largestPairSum (numbers) {
//     //TODO: Write your Code here
//     let num1 = numbers.sort((a,b)=>a-b)  // sorted the element form smallest to biggest
//     return num1[num1.length-2] + num1[num1.length-1]   // since the question only asked for the sum of the 2 biggest , I just used the new arr index 
//   }