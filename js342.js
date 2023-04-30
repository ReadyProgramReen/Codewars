// Remove String Spaces
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// Answer 1:
// function noSpace(x){

//   return x.split("").filter(e=>e !="" && e!== " " ).join('') ace 
  
// }
// Explaination  split("") with no space made each character an element of its own including the empty white spaces , since the problem asked for all the white spaces to be removed, that where filter comes into play . I create a requirement that in order to pass the filter it must not contain any white spaces ,once all white spaces are removed 

//  Answer 2 :
// function noSpace(x){
// return x.replace(/\s+/g, '')    //this is the regex for removing white spaces(I dont reall understand how it works )
// }
