// [ Question ]
// Write a program that takes three integers A,B and C as input and outputs A+B+C

// [ Solution as NodeJS ]

const [A1, B1, C1] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(A1) + Number(B1) + Number(C1));
