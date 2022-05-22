
// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  
    return  n.toString()//turns n to string 1234 => '1234'
   .split('')//turns string n to serate numebrs in an array '1234'=>['1','2','3','4'] 
             .reverse()//reverse array ['1','2','3','4'] => ['4','3','2','1']
            .map(Number);//creates a new array of string elements to number element  ['4','3','2','1'] => [4,3,2,1] 
   
   
     
    } 