// [ Question ]
// Given two integers A and B, write a program that compare A and B
// If A is greater than B, then print '>'
// If A is less than B, then print '<'
// If A and B are equal, then print '=='

// [ Solution as NodeJS ]

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

// conditional chains
const result = 
      (A > B) ? ">"
    : (A < B) ? "<"
    : "==";

console.log(result);
