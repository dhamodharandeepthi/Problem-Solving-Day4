console.log(parseInt(0.3)); //0
console.log(parseInt(0.03)); //0
console.log(parseInt(0.003)); //0
console.log(parseInt(0.0003)); //0
console.log(parseInt(0.00003)); //0
console.log(parseInt(0.000003)); //0
console.log(parseInt(0.0000003)); //3
console.log(parseInt(0.00000003)); //3

console.log(+0.3); //0.3
console.log(+0.03); //0.03
console.log(+0.003); //0.003
console.log(+0.0003); //0.0003
console.log(+0.00003); //0.00003
console.log(+0.000003); //0.000003
console.log(+0.0000003); //3e-7
console.log(+0.00000003); //3e-8

let str = "12o0";

console.log(Number(str)); //NaN
console.log(+str); //NaN
console.log(parseInt(str)); //12

let str2 = "12e8";

console.log(Number(str2)); //1200000000
console.log(+str2); //1200000000
console.log(parseInt(str2)); //12
