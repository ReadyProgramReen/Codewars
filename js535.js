
// Question :Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// Answer :
// function count(string) {
//   // TODO
 
//   let r= {}     //varaible to store property key values 
  
//   for(let i=0; i< string.length;i++){               // for loop to iterate through the string
//     if(r.hasOwnProperty(string[i])){               //checks if the property already exist in the r object 
//       r[string[i]] +=1;                            //if true, add plus 1 to the value
//     }else{
//       r[string[i]] =1                               // else create the property and make it equal to 1
//     }
//   }
