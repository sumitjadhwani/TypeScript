console.log('hello ');    

let age: number = 20;

let bigNo = 10_00_222;
console.log(bigNo);            //1000222

let str = 'hjgskj';

let tuple: [number, string] = [1, 'hgs'];

//PascalCase enum & const generated more efficient code
const enum Size {Small = 1, Medium, Large};

let mySize: Size = Size.Medium;
console.log(mySize);   //2

//Functions with optional params and more strict validation
function OptParams(num1: number, num2?: number) :number {
  if(num2)
    return num1 + num2;
  return num1;
}

console.log(OptParams(10,5));      //15
console.log(OptParams(100));      //100 
// OptParams('jskfh',50);    This will throw error.
