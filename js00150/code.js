
// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined
// SOLUTION:

// function countSheeps(arrayOfSheep) {
//   let count = 0;
//  for(let i = 0 ; i <  arrayOfSheep.length; i++){
   
//    if( arrayOfSheep[i] !== false && arrayOfSheep[i] !== null && arrayOfSheep[i] !== undefined ){
//      count +=  1
//    }
    
//  }
//  return count;
// }
