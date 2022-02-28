
// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// Solution 1: 


// function fakeBin(x){
// //   "12345095" so numbers below 5 , replace with 0 , number after with 1
//   let newX =''
//   for(let i = 0; i< x.length ; i++){
//     if(Number(x[i])>= 5){
//       newX += '1'
//     }else{
//       newX += '0'
//     }
    
//   }
//   return newX;
// }

// Solution 2 :

// function fakeBin(x){

// return x.split('').map(n => n < 5 ? 0 : 1).join('')
// }
