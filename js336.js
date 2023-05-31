// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// This is a modification on the Kata: Array2Binary addition hope you like it



// Answer 1 :
// function arr2bin(arr){
//   // show me the code
  
//   let sum = 0;                       //declare sum to have a place to add all the numbers 
//   arr.forEach(i => {              //run the array in a forEach method, which is basically a for loop for arrays
//     if(typeof i === 'number') {   // now first check if the element is a number using typeof , 
//       sum += i;                                // if true add the value to the sum declared at the top
//     }
//   });                                                   // no else stament was need so none was writen
//   return sum.toString(2);               // return the binary of the sum using toString(2)

// }

// Answer 2 :

// function arr2bin(arr){
   
//   sum = 0;                                   / /declare sum to have a place to add all the numbers 
  
// arr.forEach(e=>{                            //run the array in a forEach method, which is basically a for loop for arrays
// (typeof(e)=="number" && e !== NaN) ? sum+=e : 0;     // since Nan in typeof is also considered a number i needed to indiciate that they were not to be 
//   })                                                                                      // summed , then after i used a terminal operator to add the numbers to the sum
//   return sum.toString(2)                    /// return the binary of the sum using toString(2)

// }

// Answer 3 :
// function arr2bin(arr){
// return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
// }

// Explained>// , since the idea is to add all the number elements and get the sum. Using the reduce method would make the most sense . for each current value (y), use the terminal operator to check ifs a number before adding it. And then once all is reduced, use toString(2) to change the reduce output to a binary

