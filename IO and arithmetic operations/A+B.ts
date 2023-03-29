// [ Question ]
// Write a program that takes two integers A and B as input and outputs A+B

// [ Solution as NodeJS ]


const input = require('ts').readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(input[0]) +  Number(input[1]));
