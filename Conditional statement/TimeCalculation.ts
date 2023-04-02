// [ Question ]
// Write a program to calculate the end time of an oven bake, given a start time and the thime required to bake.
// Example - Start time: 17 40, duration: 80 -> End time: 19 0

// [ Solution in NodeJS ]

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [h, m] = input[0].toString().split(' ').map(Number);
const duration = parseInt(input[1]);

const addH = Math.floor((m + duration) / 60);
const newH = (h + addH) % 24;
const newM = (m + duration) % 60;

console.log(`${newH} ${newM}`);
