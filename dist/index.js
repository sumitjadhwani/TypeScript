"use strict";
console.log('hello ');
let age = 20;
let bigNo = 1000222;
console.log(bigNo);
let str = 'hjgskj';
let tuple = [1, 'hgs'];
;
let mySize = 2;
console.log(mySize);
function OptParams(num1, num2) {
    if (num2)
        return num1 + num2;
    return num1;
}
console.log(OptParams(10, 5));
console.log(OptParams(100));
const nullValue = null;
const emptyText = "";
const someNumber = 42;
const valA = nullValue !== null && nullValue !== void 0 ? nullValue : "default for A";
const valB = emptyText !== null && emptyText !== void 0 ? emptyText : "default for B";
const valC = someNumber !== null && someNumber !== void 0 ? someNumber : 0;
console.log(valA);
console.log(valB);
console.log(valC);
