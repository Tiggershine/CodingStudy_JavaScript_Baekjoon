// [ Question ]
/* Given N integers. Write a program that finds the maximum and the minimum values.
Input: 5 \n 20 10 35 30 7
Output: 7 35
 */

// [ Solution in NodeJS ]

const input2 = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const nums = input2[1].split(' ').map(Number);

console.log(`${Math.min(...nums)} ${Math.max(...nums)} `);
