// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.


// SOLUTION:
// function twoSort(s) {
// return s.sort()[0].split('').join('***');
// /* S.sort - takes the entire array and sorts it alphabetically 
// then [0] , after sorting , the first index is taken 
// then .split() takes that first index which is a word is then split it into individual characters 
// Then .join('***') takes each spit character and returns a new singular word with each letter ending with a 3 stars */
// }
