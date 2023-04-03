// [ Question ]
/* Given 9 different natural numbers. Write a program that finds the largest of them and index for that.
Input: 3 \n 29 \n 38 \n 12 \n 57 \n 74 \n 40 \n 85 \n 61
Output: 85 8
 */

// [ Solution in NodeJS ]

const input4 = require('fs')
  .readFileSync('/det/stdin')
  .toString()
  .split('\n')
  .map(Number);

// 3, 29, 38, 12, 57, 74, 40, 85, 61 - index: 8, value: 85

let index = 0;
let max = 0;

for (let i = 0; i < input4.length; i++) {
  if (input4[i] > max) {
    index = i + 1;
    max = input4[i];
  }
  continue;
}

console.log(max + `\n` + index);
