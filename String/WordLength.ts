// [ Question ]
// Write a program that take a word consisting of alphabets and outputs its length
// Words length can be up to 100.

// [ Solution in NodeJS ]

const inputStr = require('fs').readFileSync('/dev/stdin').toString();

console.log(inputStr.length);
