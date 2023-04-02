// [ Question ]
// Write a program that takes three integers A,B and C as input and outputs A+B+C

// [ Solution in NodeJS ]

const [A2, B2, C2] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(A2) + Number(B2) + Number(C2));
