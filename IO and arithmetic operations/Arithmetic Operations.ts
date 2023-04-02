// [ Question ]
// Given two natural numbers, A and B.
// Write a program that outputs A+B, A-B, A*B, A/B(quotient), and A%B(reminder)
// Two natural numbers A and B are given.(1 <= A,B <= 10000)
// Print A+B on line 1, A-B on line 2, A*B on line 3, A/B on line 4, and A%B on line 5.

// [ Solution in NodeJS ]

const [A3, B3] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const addtion = A3 + B3;
const substraction = A3 - B3;
const multiplication = A3 * B3;
const quotient = Math.floor(A3/B3);
const reminder = A3 % B3;


console.log(`${addtion}\n${substraction}\n${multiplication}\n${quotient}\n${reminder}`);
