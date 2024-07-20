console.log(new Date())
const currentDate = new Date()
console.log(currentDate.getDate())
console.log(currentDate.getMonth()) // 0-11
console.log(currentDate.getFullYear())

console.log(currentDate.getDay())//Sunday - Saturday : 0-6

console.log(currentDate.getTime()) // timespan
console.log(new Date(1721449258121)) 
console.log(new Date('2019', '5', '21')) 
console.log(new Date('2019-10-02')) 
console.log(currentDate.toTimeString())
console.log(currentDate.toString())
console.log(currentDate.getTimezoneOffset())
console.log(currentDate.getUTCDate())
console.log(currentDate.toISOString())
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleString())
console.log(currentDate.toUTCString())

console.log(currentDate.toLocaleDateString('hi-IN', {weekday: 'long'}))

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(days[currentDate.getDay()])

currentDate.setDate(10)
console.log(currentDate.toLocaleString())

console.log(new Date().toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    weekday: 'long'
}))


console.log(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}))

let event1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(event1.toLocaleDateString('de-DE', options));
console.log(event1.toLocaleDateString('ar-EG', options));
console.log(event1.toLocaleDateString('ko-KR', options));

console.log(currentDate.toJSON());


var date1 = '01/12/2018';
var date2 = '12/12/2018';

date1 = new Date(date1);
date2 = new Date(date2);

date1 > date2;  //false
date1 < date2;  //true
date1 >= date2; //false
date1 <= date2; //true

var datex = "2012-05-12".split('-');

// Function to format date as YYYY-MM-DD HH:mm:ss
function formatDate(date) {
    return date.getFullYear() + '-' +
      String(date.getMonth() + 1).padStart(2, '0') + '-' +
      String(date.getDate()).padStart(2, '0') + ' ' +
      String(date.getHours()).padStart(2, '0') + ':' +
      String(date.getMinutes()).padStart(2, '0') + ':' +
      String(date.getSeconds()).padStart(2, '0');
}

// Function to add days to a date
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Function to calculate the difference between two dates in days
function dateDiffInDays(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Create a date object for the current date and time
let now = new Date();
console.log('Current date and time:', formatDate(now));

// Create a date object for a specific date and time
let specificDate = new Date('2024-12-31T23:59:59');
console.log('Specific date:', formatDate(specificDate));

// Add 7 days to the current date
let futureDate = addDays(now, 7);
console.log('Date after 7 days:', formatDate(futureDate));

// Calculate the difference between the specific date and now
let daysDiff = dateDiffInDays(now, specificDate);
console.log('Days until New Year\'s Eve:', daysDiff);


// Get the day of the week (0-6, where 0 is Sunday)
let dayOfWeek = now.getDay();
let days1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log('Current day of the week:', days1[dayOfWeek]);


// Create a date object for the first day of the current month
let firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
console.log('First day of the current month:', formatDate(firstDayOfMonth));

// Create a date object for the last day of the current month
let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log('Last day of the current month:', formatDate(lastDayOfMonth));

// Convert a date to UTC
let utcDate = new Date(now.toUTCString());
console.log('Current date in UTC:', formatDate(utcDate));

// Calculate the time difference between two time zones
let nycDate = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
let tokyoDate = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
let hoursDiff = (tokyoDate - nycDate) / (1000 * 60 * 60);
console.log('Hours difference between New York and Tokyo:', hoursDiff);