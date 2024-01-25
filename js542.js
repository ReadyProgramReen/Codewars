// QUestion :
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"






// // return masked string
// function maskify(cc) {
//     let cc1= '';               //declare a empty str for the replaced characters
//   for(let i = 0 ; i<cc.length-4;i++){   // mde a for loop that stops 4 char early
//     cc1 +='#'     // add # to new declared varaible
//   }
//     return `${cc1}${cc.slice(-4)}`  ///used a template literal to return it with the sliced last 4 char
   
//   // Answer 2:
//   // let char = "#";   //assigned a single '#' character to char varaible
//   // return `${char.repeat(cc.length-4)}${cc.slice(-4)}` // used template literal to repeat it and slice the enf
//   }
  