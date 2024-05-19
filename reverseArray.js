//ReverseArray in place?
let arr = [1, 2, 3, 4, 5, 6, 7];
for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
  arr[start] = arr[start] + arr[end]; // 8=1+7;
  arr[end] = arr[start] - arr[end]; // 1=8-7;
  arr[start] = arr[start] - arr[end]; // 7=8-1;
}
console.log(arr); //[7, 6, 5, 4,3, 2, 1];
