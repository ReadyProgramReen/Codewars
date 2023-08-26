// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.


// Answer 1:
// function countSheeps(sheep) {
  
//    return sheep.filter(e=> e === true).length  
// }
//  Explaination:
// Since the problem is receivg an array and only cares about true, the filter method made the most sense . And then get the length.

