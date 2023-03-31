// [ Question ]
// Write a program to sum all of digits from a number, and N numbers are given without spaces.
// Example
// Input: 5\n 54321
// Output: 15

// [ Solution as NodeJS ]

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = 0;

for (let i = 0; i < B.length; i++) {
  result += parseInt(B.charAt(i));
}

console.log(result);
