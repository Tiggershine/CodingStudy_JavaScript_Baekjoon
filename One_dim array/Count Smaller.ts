// [ Question ]
/* Given a sequence A of N integers and an integer X. Write a program that prints all the numbers in A that are less than X.

Input: 10 5 \n 1 10 4 9 2 3 8 5 7 6
Output: 1 4 2 3
 */

// [ Solution in NodeJS ]

const input1 = require('fs').readFileSync('input.txt').toString().split('\n');

const first = input[0].split(' ');
const index1 = parseInt(first[0]);
const x = parseInt(first[1]);
const intArray1: string[] = input[1].split(' ');

let result: number[] = [];

for (let i = 0; i < index1; i++) {
  if (parseInt(intArray1[i]) < x) {
    result.push(parseInt(intArray1[i]));
  }
}

console.log(result.join(' '));
