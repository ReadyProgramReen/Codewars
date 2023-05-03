
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:
// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")
// //
// Answer :

// function isDigit(s) {
// return s == parseFloat(s)   
// }

// explaination :
// The question needs an output of a boolean so , you would need to do is to test if the input (s) is equal to the method parseFloat (whicj takesh take a string value and return its a number if one exsit ).Note that we used 2 equal signs and not 3 since (s) is a strig and the parseFloat(value) will always be a number . So we are not comparing types.
