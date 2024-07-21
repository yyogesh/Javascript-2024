const array1 = [5, 12, 8, 130, 44];
array1.push(100)
console.log(array1, array1.push(200))

console.log("********************************")
let deletedElement = array1.pop()
console.log(array1, deletedElement)

console.log("********************************")
array1.unshift(100)
console.log(array1)

console.log("********************************")
array1.shift()
console.log(array1)

console.log("********************************")
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, "FEB")
console.log(months)

console.log("********************************")
const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 1)
console.log(months1)

console.log("********************************")
const months2 = ['Jan', 'March', 'April', 'June'];
months2.splice(1, 1, "FEB", "ABC")
console.log(months2)

console.log("********************************")
const str = months2.toString()
console.log(str)
console.log(str.split(","))

console.log("********************************")
console.log(months2.join(", "))
console.log(months2.join(" $$ "))

// find, filter, map, reduce, foreach, some, includes, every, 

const array2 = [5, 12, 8, 130, 44];
console.log(array2.at(2), array2[2])

console.log("********************************")

const array5 = ['a', 'b', 'c'];
const array4 = ['d', 'e', 'f'];
const array6 = array5.concat(array4);

console.log(array5, array4, array6)

console.log("********************************")

function sum(a, b) {
    return a + b;
}

console.log("Sum is", sum(10, 5))

console.log("********************************")

var sum = function (a, b) { // function expression 
    return a + b;
}

console.log("Sum is", sum(10, 5))

console.log("********************************")

var sum = (a, b) => { // function expression 
    return a + b;
}

console.log("Sum is", sum(10, 5))

console.log("********************************")

var sum = (a, b) => a + b;

console.log("Sum is", sum(10, 5))

console.log("********************************")
const array7 = [5, 12, 8, 130, 44];
const findFunction = function (item) {
    return item > 10;
}
const findElement = array7.find(findFunction)
console.log("findElement is", findElement)

console.log("findElement 2nd way is", array7.find(function (item) {
    return item > 10;
}))

console.log("findElement 3rd way is", array7.find((item) => item > 10))

console.log("findElement 3rd way is", array7.find((item) => item > 1000))

console.log("findIndex is", array7.findIndex((item) => item > 10))

console.log("findIndex is", array7.findIndex((item) => item > 1000))

console.log("********************************")

const array8 = [5, 12, 8, 130, 44];
console.log(array8.filter(item => item > 10))

console.log("********************************")

const array9 = [5, 12, 8, 130, 44];
console.log(array8.map(item => {
    if(item < 10) {
      return item * 5
    }
    return item;
}))

console.log("********************************")

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat())
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));

console.log("********************************")

const arr3 = [0, 1, 2,4];
for(let item of arr3) {
    console.log(item);
}
console.log("********************************")
arr3.forEach(item => {
    console.log(item);
})

console.log("********************************")
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));

console.log("********************************")
const array11 = [1, 2, 3, 4];
const sum2 = array11.reduce((acc, item) => {
  return acc + item;
}, 100)
console.log("Sum: " + sum2);
console.log("********************************")

const months5 = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months5);
const array12 = [11, 2, 13, 4];
console.log(array12.sort());
console.log("********************************")
console.log(months5.reverse());
console.log(array12.sort((a, b) => a - b));

console.log("********************************")
const array17 = [1, 30, 39, 29, 10, 13];
console.log(array17.every(item => item > 2))

console.log("********************************")
const array18 = [1, 30, 39, 29, 10, 13];
console.log(array17.some(item => item > 2))

console.log("********************************")
console.log(Array(5).fill("Hello"))
console.log(Array(5).fill("Hello").map((item, index) => `${index + 1}-${item}`))

console.log("********************************")
const array21 = [1, 2, 3];

console.log(array21.includes(2));
// Expected output: true

console.log("**********************")

const array22 = [1, 2, 3];
const iterator = array22.values()
console.log('iterator', iterator)
for (let value of iterator) {
  console.log(value);
}

console.log("**********************")

const array23 = [1, 2, 3];
const iterator1 = array23.entries()
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())

console.log("**********************")
for (let [index, item] of iterator1) {
  console.log(index, item);
}

console.log("**********************")
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 3))
console.log(arr);

console.log("**********************")

// text.matchAll("Cats");