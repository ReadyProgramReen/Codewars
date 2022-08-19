// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// SOLUTION 1
// function well(x){
  
// //   x is an ['bad', 'bad', 'bad']
 
//    let good = 0;
  
//   for(let i = 0; i< x.length;i++){
//     if(x[i] === 'good'){
//       good += 1
//     }
//   }
//  return good > 2 ? 'I smell a series!': good >= 1 ? 'Publish!': 'Fail!' 
// }

// SOLUTION 2 :
// const well = x => {
//   let newCount = x.filter((x,i) => x ==='good').length
  
//   return newCount > 2 ? 'I smell a series!': newCount >= 1 ? 'Publish!': 'Fail!' 
// }
