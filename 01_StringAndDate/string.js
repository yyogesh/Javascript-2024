// document.getElementById("firstNumber").value = 100

// function onAddNumber() {
//     let firstNumber = parseInt(document.getElementById("firstNumber").value);
//     console.log(firstNumber)
//     // let secondNumber = parseInt(document.getElementById("secondNumber").value);
// }

// concat string merge two or many strings
let str = `Microsoft Edge will delete your browsing history, cookies, and site data, as well as passwords, addresses, and form data when you close all InPrivate windows. Other people using this device won't see your browsing activity but your school, workplace, and internet service provider might still be able to access this data`;

let newStr = str.concat("asfdasdf")

let newStr1 = str + " " + "asdf asdfasdf asfd"

let newStr2 = `Hello how are you ${new Date()}`



console.log(newStr.charAt(0)) // M
console.log(newStr.charAt(1))

const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!')); // true
console.log(str1.endsWith('bes', 16)); // true
console.log(str1.endsWith('the', 16)); // false

const str2 = 'Saturday night plans';
console.log(str2.startsWith('Sat'));

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.includes('fox')); // true

const paragraph = "I think Ruth's dog is cuter than your dog!";
const regex = /[^\w\s']/g;
console.log(paragraph.search(regex))
console.log(paragraph[41])
console.log(paragraph[paragraph.search(regex)])


const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex1 = /[A-Z]/g;
console.log(paragraph1.match(regex1)); 

const paragraph2 = 'The quick brown fox jumps over the lazy dog. It barked.';
console.log(paragraph2.indexOf('brown'))
console.log(paragraph2.indexOf('brownv'))

let emailId = "abc@gmail.com"
console.log(emailId.substring(4))
console.log(emailId.substring(4, 6))
console.log(emailId.substring(6, 2))
console.log(emailId.substring(-2, -1))
console.log(emailId.slice(-3, -1))

const indexOfAt = emailId.indexOf('@')
console.log(emailId.slice(0, indexOfAt))
console.log(emailId.slice(indexOfAt + 1))


const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase
console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));

const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
console.log('items', items)

const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

const paragraph4 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph4.replace("Ruth's", 'my'));

const paragraph5 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph5.replaceAll('dog', 'monkey'));

let hr = "11"
let hr1 = "7"

console.log(hr, `0${hr1}`.slice(-2))

const str4 = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');

let arr = ["The", "quick", "brown"]

const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.toLowerCase());

const sentence3 = ' The quick brown fox jumps over the lazy dog. ';
console.log(sentence2.trim().toLowerCase());


const str6 = '5';
console.log(str6.padStart('10', '$'))

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
console.log(last4Digits.padStart(fullNumber.length,'*'))

const number = 100
console.log(number.toString())