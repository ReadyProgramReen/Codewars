// Question : Reverse a Number

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1


// Answer :

// function reverseNumber(n) {

//   //assign n1 to the positive num , then convert num => string=> []=> reverse the array and join
//  let n1 = Math.abs(n).toString().split('').reverse().join('')
 
//  //check if the num was original a - || + and return it
//  return   (n > 0 ? 1 : -1) * n1
// }
