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
