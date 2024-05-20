let arr = [3, 30, 34, 5, 9];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    //custom comparision
    let num1 = "" + arr[j] + arr[j + 1];
    let num2 = "" + arr[j + 1] + arr[j];
    if (+num1 < +num2) {
      //swap the numbers
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr); //[ 9, 5, 34, 3, 30 ]
let result = "";
for (let ele of arr) {
  result += ele;
}
console.log(result); //9534330
