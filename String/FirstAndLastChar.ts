// [ Question ]
// Write a program that given a string as input, prints the first character and last character of string.
// Example
// Input: 3\n ACDKJFOWIEGHE\n O\n AB
// Output: AE\n OO\n AB

// [ Solution as NodeJS ]

const inputString = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i < inputString.length; i++) {
  console.log(inputString[i].charAt(0) + inputString[i].charAt(inputString[i].length - 1));
}
