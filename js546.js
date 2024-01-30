// Alphhabet War 
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!


// Answer :
// function alphabetWar(fight)
// {
  
//   let fightArr = fight.split('') // turned fight string to array 

//   const left =['w','p','b','s']    // create an array for all the left side letters 
  
//   const right =['m','q','d','z']   // create an array for all the right side letters 
  
  
  
// //filterd the fight array into 2 seperate array to hold each side 
//   let arr1 = fightArr.filter(e => left.includes(e))  
//   let arr2 = fightArr.filter(e => right.includes(e))
  
  
//   //use reduce method with ternery operator to assign each letter a value and found the sum of each side 
//  let leftSum = arr1.reduce((a,c)=>a+(c=="w"? 4 : c=="p" ? 3 : c=="b"? 2 : 1 ),0)
  
//   let rightSum = arr2.reduce((a,c)=>a+(c=="m"? 4 : c=="q" ? 3 : c=="d"? 2 : 1 ),0)
  
  
// // use a ternery operator to to check which side's sum is greater and returned a string
// return leftSum == rightSum ? "Let's fight again!": leftSum > rightSum ?"Left side wins!":"Right side wins!"
// }