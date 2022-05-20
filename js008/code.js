 // String repeat

 // Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


// Solution 1 :

function repeatStr (n, s) {
    let string = '';
      for(let i = 1; i <= n; i ++){
         string += s;
      }
      return string;
    }

    //Solution 2:

    function repeatStr (n, s) {
        return s.repeat(n) ;
       }