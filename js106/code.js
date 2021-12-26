// DESCRIPTION:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
// examples:
// uniTotal("a") == 97 uniTotal("aaa") == 291

// SOLUTION:
// function uniTotal (s) {
// // total up dem unicodes!
// return s== "" ? 0 :s.length ==1? s.charCodeAt(0):
//       s.split('')
//         .map((e,i)=>{return e.charCodeAt(0)})
//         .reduce((c,e)=> c+e,0)
// }
