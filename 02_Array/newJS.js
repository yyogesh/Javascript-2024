// JavaScript String matchAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
console.log(Array.from(iterator));


// JavaScript BigInt
let x = 999999999999999;
let y = 9999999999999999; // too big
console.log(x, BigInt(y), typeof y);

// The Nullish Coalescing Operator (??)

let a = null;
let b = 10;
let c = a ?? b; // c will be 10

let d = undefined;

let name1 = null;
let text1 = "missing";
let result = name1 ?? text1;

// The Optional Chaining Operator (?.)

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.type1 ?? "missing")

// The &&= Operator

let num1 = "10";
let num2 = 20;
num1 &&= num2; // num1 will be 20 // +=
num1 = num1 && num2; // x will be
console.log(num1)

// The ||= Operator

// The ??= Operator

let x2;
x2 ??= 5;

// JavaScript Promise.allSettled()
// Promise.any()
// String replaceAll()

// JavaScript Numeric Separator (_)
const num11 = 1_000_000_000;
const num12 = 1000000000;
console.log(num11 === num12, num11);

// JavaScript Array at()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);


// JavaScript String at()

// Object // key, value, entries, groupBy
// Promise
// Class 
// truthy fasly
// Exception handling
