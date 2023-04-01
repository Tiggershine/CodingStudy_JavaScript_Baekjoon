// [ Question ]
// Write a program that after take a string S, repeats each character R times to create a new string P, and outputs it.
// Repeat the first character R times, repeat the second character R times, and so on.
// S contins only the "alphanumeric" characters.
// alphanumeric characters: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./:

// [ Solution as NodeJS ]

const input = require('fs').readFileSync('input.txt').toString().split('\n');

let count = input[0]; // 2

for (let i = 1; i <= count; i++) {
  let task = input[i].split(' '); // 3 ABC
  let repeatCount = task[0]; // 3
  let stringArray = task[1].split(''); // ["A", "B", "C"]

  let result: string[] = [];

  for (let j = 0; j < stringArray.length; j++) {
    let temp: string = stringArray[j].repeat(repeatCount);
    result.push(temp);
  }

  console.log(result.join(''));
}
