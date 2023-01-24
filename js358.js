// Question : Split Strings 

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// Asnwer :
// function solution(str){
  
//   let strArr = str.split('')  
//    let arrStr = []
  
   
//    for(let i = 0; i < strArr.length ; i+=2){
//      if(strArr[i+1] ){
//        arrStr.push(`${strArr[i]}${strArr[i+1]}`)
//      }else if (!strArr[i+1]){
//        arrStr.push(`${strArr[i]}_`)
//      }
//    }
//   return arrStr
// }