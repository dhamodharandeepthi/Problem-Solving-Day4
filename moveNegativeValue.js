//using sort method
/*
let array = [3, -1, 4, -2, 7, -5];
array.sort((a, b) => b - a);
console.log(array); //[ 7, 4, 3, -1, -2, -5 ] but we need [ 3, 4, 7, -1, -2, -5 ]
*/

//method 1
let array = [3, -1, 4, -2, 7, -5];
array.sort((a, b) => {
  if (a >= 0 && b < 0) {
    return -1; //a should come before b
  } else if (a < 0 && b >= 0) {
    return 1; //b should come before a
  } else {
    return 0; //no need to change the order
  }
});
console.log(array); //[ 3, 4, 7, -1, -2, -5 ]
