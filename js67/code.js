// DESCRIPTION:
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.


// SOLUTION:
// function calculateTip(a, rating) {
//   rating = rating.toLowerCase()
  
//   return rating == "excellent"? Math.ceil(a*0.2):
//          rating == "poor"? Math.ceil(a*0.05):
//          rating == "good"? Math.ceil(a*0.1):
//          rating == "great"? Math.ceil(a*0.15):
//          rating == "terrible"? 0:"Rating not recognised"
// }
