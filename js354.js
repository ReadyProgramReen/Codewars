// Question :Most Digits 

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Answer :


// function findLongest(array){
//     // code here
    
//   let newArr =  array.map(e=>e.toString().length)
//   let answerLocation = newArr.indexOf(Math.max(...newArr))
//   return array[answerLocation]
//   }
  
//   // i really liked this question. When i  attempted to find the length of a Number type ,
//   //I  recieve an undefined . Meaning lengths can only be found in strings. So i first implemented the 
//   //map method and created a new array where each number element is first turned into a string and then
//   // i find the length of each element and assign the new length array to a varaible .
  
//   // Then i used the new array and passed it through a Math.max, but i know, Math.max does not work on array unless
//   // a spread operator . I then asked for the index of the largest length index with indexOf because index of returns 
//   // the first element that passes the test and stored it in a new variable 
  
//   // // then finally i used the varaiable holding the largest index to return the element with the largest digit
