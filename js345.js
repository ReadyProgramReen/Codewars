// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// Answer:
// function abbrevName(name){
//   return name.split(" ")       //turns Sam Harris into ['Sam','Harris']
//     .map((el) => el[0].toUpperCase())             //turns ['Sam','Harris'] to a new aray of ['S',H]
//     .join(".")                                      //turns ['S','H'] to [S.H]

// }
