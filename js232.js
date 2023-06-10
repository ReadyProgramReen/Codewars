// Flick SwitchTask
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]


// Answer :

// function flickSwitch(arr){
//   let switchh = true;              // declare a value to true
// return arr.map(e=>{            // since the  map method returns a new array, it only makes sense to use it 
//   if(e == "flick"){                   //now create an if statement to test if the current element is eqaul to flick 
//     switchh = !switchh           // if equal turn the current switch value to the opposite of itself(so true -> false or false -> true)
//       return switchh                //  returns the opposite of the switch statement to the new map array for each loop 
//   }else{
//     return switchh                   //returns the current value of switch for all the elements that are not equal to flick
//   }
// }) 
// }
