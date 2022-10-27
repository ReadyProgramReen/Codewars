// DESCRIPTION:
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// SOLUTION:
// function printerError(s) {
//     // your code
// //   let errorCount = ("abcdefghijklm").split("")
// //   let s1 = s.split()
// //   let check = s1.filter((e,i)=>!e.includes(errorCount))
// //   return `${check.length}/${s.length}`
  
  
//   var passingLetters = ("abcdefghijklm").split("");// a base array of acceptable letters
//   var a = s.length;//this will be the denominator in the final result
//   var i = 0;//index number for the while loop to pass throught the string
//   var count = 0;//this will be the numerator in the final result

//   while (i<a)
//   {
//     if (passingLetters.indexOf(s[i])===-1) {
//       count++;
//     }
//     i++;
//   }
//   return (count + "/" + a);
// }
