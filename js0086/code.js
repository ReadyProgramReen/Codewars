// DESCRIPTION:
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// SOLUTION:
// function expressionMatter(a, b, c) {
//    // highest achievable result
//   let o1 = a*(b+c)
//   let o2 = (a*b) + c
//   let o3 = a*b*c
//   let o4 = a+b+c
//   let o5 = (a+b) * c
//   let o6 = a+(b*c)
// return Math.max(o1,o2,o3,o4,o5,o6)
// }
