// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example , for [1,2,3]=> 1^2 * 2^2 *  3^3

// Answer1 :
// function squareSum(numbers){
// return numbers.reduce((a,c)=>a + c**2,0)   // reduce  adds all element in an array so all we needed to do was also indicate for each element square it.
// }

// Answer 2:
// function squareSum(numbers){
//   let sum = 0                              // declare a valuble to keep track of the sum
// for(let i = 0 ; i<numbers.length;i++){        //do a traditinal for loop
//   sum = sum + Math.pow(numbers[i],2)     // in the forloop, each time it goes around ut adds to the sum after multipling by itself
// }
//   return sum;              // returns the sum
// }

