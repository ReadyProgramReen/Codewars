// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
// //    let sum = 0 ;
// //   for (let i = 0 ; i < arr.length ; i++){
// //     if(arr[i] > 0){
// //       sum  += arr[i];
// //     }
// //   } 
// //   return sum
//    return arr.filter(e => e > 0).reduce((i,a)=>i+a,0)}

// SOLUTION 2:
// function positiveSum(arr) {
// //   return arr.filter(e => e>0).reduce((acc,e)=> acc+e,0)
// let sum =0;
//   for(let i = 0 ; i < arr.length; i++){
//     if( arr[i]>0){
//       sum += arr[i]
//     }
//   }
//   return sum;
// }
