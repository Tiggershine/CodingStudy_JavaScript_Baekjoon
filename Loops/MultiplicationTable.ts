// [ Question ]
// Write a program that takes N as input and outputs N-multiplication table.
// Input: On the first line, N is given. N is greater than or equal to 1 and less than or equal to 9.


// [ Solution as NodeJS ]

const [N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

function multiplicationTable() {
  for (let i = 1; i < 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
}

multiplicationTable();
