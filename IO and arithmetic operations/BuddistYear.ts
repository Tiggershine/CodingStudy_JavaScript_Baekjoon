// [ Question ]
// Write a program that, given a buddhist year, converts it to a calendar year.
// example - buddhist year: 2541, calendar year: 1998

// [ Solution in NodeJS ]


const buddhistYear = require('fs').readFileSync('/dev/stdin').toString().map(Number);

console.log(buddhistYear - (2541 - 1998));
