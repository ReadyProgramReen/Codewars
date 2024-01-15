// Questions 2 

// Total amount of points
// 2.Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// Answer 1 : 

// function points(games) {
//   let point = 0;                                       // decalre a value to keep track of point 
//   for(let i = 0; i<=9; i++){                      // create a forloop to loop through each element (or score ),till it runs 10 times 
    
//     let each = games[i].split(":");            // declare a new value called each, and then while on each loop split each array of game into 2 
    
//     if(each[0] > each[1]){                        // start a if statement that check if the element of the new array of each at each[0]> each[1]  
//       point+=3;                                       // if the statement is true add 3 to the point
//     }else if(each[0]===each[1]){             //if each[0]  is eaqual in both type and value to each[1]
//       point+=1;                                       // add 1 to points 
//     }else{                                                 // otherwise or else 
//       point+=0;                                       // add nothing to points 
//     }
//   }                                                            // make sure you leave the forloop and display the answers after the right closing bracket
//   return point                                         // the qeustion asked for the final score so once the forloop ends return the final point
// }
