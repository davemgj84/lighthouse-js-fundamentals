// How man Hundreds - Assignment:

const howManyHundreds = function (num) {
  const container = Math.floor(num / 100);
  return container;
}

console.log(howManyHundreds(123456));

// nailed it. I had to look up the object/method to round down the number and found Math.floor() - Originally I tried Math.ceil()
// but realized that it was rounding it up to the nearest hundred, instead of rounding it down. 