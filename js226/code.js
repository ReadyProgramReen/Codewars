// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// SOLUTION 1 :
// function repeatStr (n, s) {
// let string = '';
//   for(let i = 1; i <= n; i ++){
//      string += s;
//   }
//   return string;
// }

// SOLUTION 2:
// function repeatStr (n, s) {
//  return s.repeat(n) ;
// }
// SOLUTION 3 :
// const repeatStr = ((n,s)=> s.repeat(n))
