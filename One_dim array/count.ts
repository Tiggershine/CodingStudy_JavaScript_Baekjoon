// [ Question ]
/* Given N integers. Write a program that counts the integer v in N.
Input: 11 \n 1 4 1 2 4 2 4 2 3 4 4 \n 2
Output: 3
 */

// [ Solution in NodeJS ]

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let index = input[0];
let intArray = input[1].split(' ');
let v = input[2];

let count = 0;

for (let i = 0; i < index; i++) {
  if (Number(intArray[i]) === Number(v)) {
    count++;
  }
}

console.log(count);
