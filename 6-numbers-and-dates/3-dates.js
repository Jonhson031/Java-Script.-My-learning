'use strict';

// Create a date
let now = new Date();
console.log(now);

let myDate = new Date('2006, 4, 15');
console.log(myDate);

// Getting Date Components
let d = new Date();

console.log(d.getFullYear());  // 2025
console.log(d.getMonth());     // 0–11 (0 = January)
console.log(d.getDate());      // 1–31
console.log(d.getDay());       // 0–6 (0 = Sunday)
console.log(d.getHours());     // 0–23
console.log(d.getMinutes());   // 0–59
console.log(d.getSeconds());   // 0–59
console.log(d.getMilliseconds()); // 0–999

let meeting = new Date(2025, 9, 21, 14, 30); // Oct 21, 2025, 2:30 PM
let future = new Date(2020, 4, 9, 12, 5);
future.setFullYear(2039);
console.log(future);


// Operations with Dates
console.log('---Operations with Dates---');
console.log(+future); // convert date in mili seconds

const daysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // ? to convert mili seconds to days
const days1 = daysPassed(new Date(2035, 3, 29), new Date(2039, 4, 29))
console.log(days1);


// ? Days Until a Specific Date 
let today = new Date();
let newYear = new Date("2026-01-01");
let diff = newYear - today;
let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`🎉 ${daysLeft} days left until New Year!`);

console.log(today.toLocaleDateString()); // ? to show every user their current date, based on their time zone



// Internationalizing Dates
// Used for displaying dates and times in a way that matches the user’s local language, region, and formatting style
console.log('---Internationalizing Dates---');
const now2 = new Date();
const formatted = new Intl.DateTimeFormat({
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
}).format(now2);
console.log(formatted);




const formattedUa = new Intl.DateTimeFormat("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
}).format(now);

console.log(formattedUa);
