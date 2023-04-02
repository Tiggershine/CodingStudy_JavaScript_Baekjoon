// [ Question ]
/* Given two numbers A and B.
Write a program that comapre reversed A and reversed B and return a bigger.

Input: 734 893
Output: 437
 */

// [ Solution in NodeJS ]

const input4 = require('fs').readFileSync('input.txt').toString().split(' ');

const A: string[] = input4[0].split('');
const B: string[] = input4[1].split('');

const reverseA: string[] = [];
const reverseB: string[] = [];

for (let i = 2; i >= 0; i--) {
  reverseA.push(A[i]); // ['1', '2', '2']
  reverseB.push(B[i]); // ['1', '3', '2']
}


for (let j = 0; j < 3; j++) {
  if (parseInt(reverseA[j]) === parseInt(reverseB[j])) {
    continue;
  }
  if (parseInt(reverseA[j]) > parseInt(reverseB[j])) {
    console.log(reverseA.join(''));
    break;
  }
   console.log(reverseB.join(''));
   break;
}
