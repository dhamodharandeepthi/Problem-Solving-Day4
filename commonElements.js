//find the common elements between two array?

let n = Math.floor(Math.random() * 10);
let m = Math.floor(Math.random() * 10);
console.log(n);
console.log(m);

let arr1 = Array.from({ length: n }, () => Math.floor(Math.random() * 10));
let arr2 = Array.from({ length: m }, () => Math.floor(Math.random() * 10));
console.log(arr1);
console.log(arr2);

let obj = {};
let common = [];

for (let i = 0; i < n; i++) {
  obj[arr1[i]] = true;
}
for (let j = 0; j < m; j++) {
  if (obj[arr2[j]]) {
    common[common.length] = arr2[j];
  }
}
console.log(common);

//Time complexity =>O(n+m)
//space complexity =>O(n**2)
