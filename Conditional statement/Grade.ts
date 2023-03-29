// [ Question ]
// Write a program that take a test score and outputs 
// A for 90 to 100
// B for 80 to 89
// C for 70 to 79
// D for 60 to 69
// The test score is an integer greater than or equal to 0 and less than or equal to 100.

// [ Solution as NodeJS ]

const [score] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const grade =
  100 >= score && score >= 90
    ? 'A'
    : 89 >= score && score >= 80
    ? 'B'
    : 79 >= score && score >= 70
    ? 'C'
    : 69 >= score && score >= 60
    ? 'D'
    : 'F';

console.log(grade);
