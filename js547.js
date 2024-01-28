// Backspaces in string

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


// Answer :
// function cleanString(s) {
//  // ... your code ...
//   if(s == 's') return ''    // checked for if the string is empty 
  
//   let s1 = [];  // declared a new array variable 
  
//   let sArr = s.split('')    // turned the string of s into an array and assigned it to a new varaible
  
//   for(let i= 0; i < sArr.length; i++ ){    //started a forloop
    
//     if(sArr[i] !== "#"){        // checked if the current value is not equal to #
//       s1.push(sArr[i])           // if true , push the current value to the new array  S1
//   }else{                              //else
//     s1.pop()                       //remove an element from the end of the s1 array 
//   }
   
// }
//   return s1.join('')           // convert s1 array back into a string
//   }