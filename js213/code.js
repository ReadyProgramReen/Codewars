// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// SOLUTION 1:
// function findOdd(A) {
//   //happy coding!
//  //if the arr is 1 element , return the element,
//   //but if the array is multiple thing you have to find the number that doesnt fit in the pattern
//   let result = 0;
//   let o = A.sort((a,b)=>a-b)
//   for(let i = 0; i<o.length ; i++){
//     for(let j = 0 ; j < o.length ; j++){
//       if (o[i] == o[j]){
//         result++;
//       }
//     }
//     if(result % 2 !== 0)
// SOLUTION 2:
// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }
