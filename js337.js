// A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]  -->"Your function didn't return anything"


// Answer 1 :
// function findNeedle(haystack) {
//   // your code here
//   let slot ;                    // declared slot 
//    haystack.find((e,i)=> e === "needle"? slot=i:slot=undefined)  // used the find method, to see where needle is , and then saved the index to slot
//   return slot == undefined? "Your function didn't return anything":`found the needle at position ${slot}`  
//                                                                                             // use terminal operator to return the output 
// }
// //note: the reason i needed to push the index to slot is because the find method only return the value of what its looking for with no alterations 

// Answer 2 :

// function findNeedle(haystack) {
//   // your code here

//  return `found the needle at position ` + haystack.indexOf('needle')  // used the indexOf in a template lieteral string to indicate the index of the 
// }                                                                                                              // needle 

// Answer 3:

// function findNeedle(haystack) {

// return `found the needle at position ${haystack.findIndex(e=>e=="needle")}`
// }
// // use findIndex instead of indexof()
