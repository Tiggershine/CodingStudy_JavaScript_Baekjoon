// [ Question ]
/* Given a string contains only lowercase and uppercase of letter and space. Write a program that conunts the number of words.

Words are seperated by a single space and there're no consecutive spaces. 
The string can begin or end with a space
 */

// [ Solution in NodeJS ]


const input3 = require('fs').readFileSync('input.txt').toString().trim().split(' ');

console.log(input3[0] === 0 ? 0 : input3.length);
