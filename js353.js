// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


// function switcheroo(x){
//     return [...x].map(e=>e.toLowerCase() == 'a' ? 'b': e.toLowerCase() == 'b' ? "a": "c").join('')
//     }

//used the spread operate to turn the str into arr, then used ,map method with the ternary operator to see what e was and then replace it .