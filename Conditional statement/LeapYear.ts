// [ Question ]
// Given a year, write a program that outputs 1 or 0, if it is a leap year.
// A leap year is when the year is a multiple of 4, but not a multiple of 100, or a multiple 400.

// [ Solution in NodeJS ]

const fs = require('fs');
const [year] = fs.readFileSync('/dev/stdin').toString().split(' ');

const leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 1 : 0;

console.log(leapYear);
