//Latest Clock

// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

// The time should be in HH:MM format.

// Examples:

// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)
// Notes
// Result should be a valid 24-hour time, between 00:00 and 23:59.
// Only inputs which have valid answers are tested.






// Answer :

// function latestClock(a, b, c, d) {

//     const values = [`${a}${b}${c}${d}`,
//                     `${a}${b}${d}${c}`,
//                     `${a}${c}${b}${d}`,
//                     `${a}${c}${d}${b}`,
//                     `${a}${d}${b}${c}`,
//                     `${a}${d}${c}${b}`,
//                     `${b}${a}${c}${d}`,
//                     `${b}${a}${d}${c}`,
//                     `${b}${c}${a}${d}`,
//                     `${b}${c}${d}${a}`,
//                     `${b}${d}${a}${c}`,
//                     `${b}${d}${c}${a}`,
//                     `${c}${b}${a}${d}`,
//                     `${c}${b}${d}${a}`,
//                     `${c}${a}${b}${d}`,
//                     `${c}${a}${d}${b}`,
//                     `${c}${d}${b}${a}`,
//                     `${c}${d}${a}${b}`,
//                     `${d}${b}${c}${a}`,
//                     `${d}${b}${a}${c}`,
//                     `${d}${c}${b}${a}`,
//                     `${d}${c}${a}${b}`,
//                     `${d}${a}${b}${c}`,
//                     `${d}${a}${c}${b}`,
//                    ];
//     const response = values.filter( a => parseInt(a) <= 2359).filter(a => parseInt(a)%100 < 60).sort((a, b) => b-a)[0];
//     return `${response.substring(0, 2)}:${response.substring(2, 4)}`;
//   }
  