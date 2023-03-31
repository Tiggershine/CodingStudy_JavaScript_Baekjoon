// [ Question ]
// Given the word S, which consists of only lowercase letters of the alphabet. For each letter, write a program that prints the first occurrence if it is in the word and -1 if it is not.
// For each alphabet, print the first occurrence of a, the first occurrence of b, ... the first occurrence of z, separated by a space.
// If an alphabet does not occur in a word, print -1. The first letter of the word is position 0, the second letter is position 1.

// [ Solution as NodeJS ]

const [str]: string[] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let result1: number[]= [];

// ASCII CODE a ~ z: 97 ~ 122
// String.fromCharCode(i): created from UTF-16 Code units to Char
// indexOf: return first index from string which char contains
for (let i = 97; i <= 122; i++) {
  result1.push(str.indexOf(String.fromCharCode(i)));
}

console.log(result1.join(' '));
