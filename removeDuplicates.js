//method 1
/*
let n = Math.floor(Math.random() * 10);
let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10));
console.log(arr);
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = true;
}
console.log(obj);
arr.length = 0;
for (let key in obj) {
  arr[arr.length] = +key;
}
console.log(arr);
*/

//method 2
let arr = [1, 2, 3, 2, 5, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != null);
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr[j] = null;
    }
  }
}
let slowInd = 0;
for (let fastInd = 0; fastInd < arr.length; fastInd++) {
  if (arr[fastInd] != null) {
    arr[slowInd++] = arr[fastInd];
  }
}
arr.length = slowInd;
console.log(arr); //[1,2,3,5]
