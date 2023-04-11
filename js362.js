// WeIrD StRiNg CaSe
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"


// Answer :

// function toWeirdCase(string){
//   return string.split(' ').map(function(word){         //split the array by words , so with space . 
//     return word.split('').map(function(letter, index){     //  split each word by character, no space. 
//       return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()    // validate if the index of the word has a postitive or neg index 
//     }).join('');                                                                                                  // join the no spaced arr back into a string 
//   }).join(' ');                                                                                                   // join the spaced arr back into a string 
// }

// Note : Pay attention to the small details and pay attentionto ur returns 