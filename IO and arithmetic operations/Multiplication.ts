// [ Question ]
// Find the value of each line that occurs during the computation of the multiplication.
// Example - input: 472 385, output: 2360 3776 1416 181720

// [ Solution as NodeJS ]


const [C, D] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [D1, D2, D3] = D.split('');
const temp1 = C * D3;
const temp2 = C * D2;
const temp3 = C * D1;
const sum = temp1 + temp2 * 10 + temp3 * 100;

console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`);
