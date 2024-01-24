// Question: Remove duplicate words

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


// Answer :

// const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// //[...new Set removes all duplicates ]
// //s.split(' ') splits the elements by words instead of letters 
// //.join turns the strings back into an array