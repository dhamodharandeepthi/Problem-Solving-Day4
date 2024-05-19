let arr = ["apple", "banana", "cherry", "date"];

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseArrayOfStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverseString(arr[i]);
  }
  return arr;
}
console.log(reverseArrayOfStrings(arr)); //[ 'elppa', 'ananab', 'yrrehc', 'etad' ]
