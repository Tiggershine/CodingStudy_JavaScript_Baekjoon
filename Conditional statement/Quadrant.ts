// [ Question ]
// Write a program that take the coordinates of a point and dtermines which quadrant it is in.
// Assume that both the x- and y-coordinates are positive or negative.
// −1000 ≤ x ≤ 1000; x ≠ 0, (−1000 ≤ y ≤ 1000; y ≠ 0)

// [ Solution as NodeJS ]

const [X, Y] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const result = 
      X > 0 && Y > 0 ? 1
    : X < 0 && Y > 0 ? 2
    : X < 0 && Y < 0 ? 3
    : 4;

console.log(result);
