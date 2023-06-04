// Password maker 

// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

// Answer :
// function makePassword(phrase) {
//   // Your code here//
//   //turn str into an array , and use map() to return only the first index of each element .

//   let phrase1 = phrase.split(' ').map(e=> e.slice(0,1))

//   //create a conditional with the new map() and check if there is an i,o,s.

//   return phrase1.map(e=> {
//     return e.toLowerCase() == 'i' ? 1
//     : e.toLowerCase() == 'o' ? 0 
//     : e.toLowerCase() == 's'? 5 : e }).join('')
  
// }
