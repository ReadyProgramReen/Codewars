// To square(root) or not to square(root)
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// Answer :

// function squareOrSquareRoot(array) {
//   return array.map(e=> Math.sqrt(e)%1 == 0?Math.sqrt(e) : e**2) 
  
// }


// Explain : since the question is asking for a new array , i used map and then used Math.squrt() on each elemnt to know if first the 
// number can be squard, ad then confirm that by adding %1 == 0 , which sees if the squared number is a whole number , if true return
//  Math.sqrt of the value and if false return the value multiplied by itself )
