// [ Question ]
// Given a word S and an integer i, write a program that prints the i-th letter of S.
// Input: On the first line, given a word S that contains only lowercase and uppercase letters in English. The word can be up to 1,000 characters

// [ Solution in NodeJS ]

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const str = input[0];
const index = parseInt(input[1]) - 1;

console.log(str.charAt(index));
