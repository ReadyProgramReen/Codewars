// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// SOLUTION:

// const squareDigits = num => parseInt(String(num).split('').map(x => parseInt(x)**2).reduce((a, x) => a + String(x)))
