// [ Question ]
// Write a program to calculate award from dice rolling
// There is a game where you roll three dice with spots ranging from 1 to 6 and win a prize according to the following rules. 
// If you roll 3 identical eyes, you win 10,000 won + (identical eyes)×1,000 won. 
// If you roll only 2 identical eyes, you win 1,000 won + (identical eyes)×100 won. 
// If all the eyes are different, you will receive (the largest of the eyes)×100 won.



// [ Solution as NodeJS ]

const throws = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

let award = 0;

function dice() {
  throws.sort();

  if (throws[0] == throws[1]) {
    if (throws[1] == throws[2]) {
      return (award = throws[0] * 1000 + 10000);
    }
    return (award = throws[0] * 100 + 1000);
  } else if (throws[1] == throws[2]) {
    return (award = throws[1] * 100 + 1000);
  }
  return (award = throws[2] * 100);
}

dice();

console.log(award);
