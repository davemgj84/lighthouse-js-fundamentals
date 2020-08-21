// Kata 7 - In the Air Tonight:

/* *** Below was my initial code - I decided to have another go at it because it does not 
       use the ++ operator suggested in the exercise. Although still gets the same results with the given tests.
       I am curious about what is prefered, or does it matter as they both arrive at the same destination? ***

const checkAir = function (samples, threshold) {
  let level = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      level += 0.1;
    }
  }
  if (level > threshold) {
    return 'Poluted';
  } else {
    return 'Clean';
  }
};

*/

const checkAir = function (samples, threshold) {
  let level = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      level++;
    }
  }
  if (threshold < level / 10) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))