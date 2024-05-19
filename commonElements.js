//find the common elements between two array?

let arr1 = [6, 5, 8, 7, 9];
let arr2 = [1, 2, 5, 9, 4, 3];
let commonArr = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      commonArr[commonArr.length] = arr2[j];
    }
  }
}
console.log(commonArr); //[5,9]
