// Question :All inclusive?
// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:

// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

// Answer:

// function containAllRots(strng, arr) {
//   //create a loop 
//   for(let i = 0; i < strng.length ; i++){
//       // conditional that check if the each rotated str is in the arr , if not indexof == -1
// if( arr.indexOf( strng.slice(i) + strng.slice(0,i))== -1){
//   return false
// }
// }
//     return true

//   }