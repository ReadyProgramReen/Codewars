// Question : Stop gninnipS My sdroW!

//   Write a function that takes in a string of one or more words, and returns the same string, but with all words that 
//   have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and 
//   spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
  
// Answer:

// function spinWords(s){

//  //checks if the string is a single word & if the length is greater than 5,
// //then reverse the string  wiyth no space , then reverse andjoin with no space     
// if(!s.includes(' ') && s.length > 5) return s.split('').reverse().join('')
  
  
//   //else split the string by each full word with space in split(' '), then use the map method
//   // and use the ternery operator to check if the current word (e) is greater than 5, if true ,
// //split the current element with no space because ur targeting each letter using the spread operator
// //then reverse the new array and join it back together , if e is less than 5 , just return  it untoched
//   // then join the entire mapped array back into a string 
//   return s.split(' ').map(e=>{
//     return e.length >= 5 ? [...e].reverse().join("") : e 
//    }).join(' ')
  
  
// }

// // spinWords("Hey fellow warriors" )//'Hey wollef sroirraw'
// // spinWords("This is a test") //"This is a test   
// // spinWords("This is another test") //"This is rehtona test"