// [ Question ]
// Write a program to sum all of digits from a number, and N numbers are given without spaces.
// Example
// Input: 5\n 54321
// Output: 15

// [ Solution in NodeJS ]

const [A1, B1] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = 0;

for (let i = 0; i < B1.length; i++) {
  result += parseInt(B1.charAt(i));
}

console.log(result);
