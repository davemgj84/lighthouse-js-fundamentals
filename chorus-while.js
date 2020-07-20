//NOTE: Code may be commented out, depending on what parts I was testing.

/*
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

*/

const chorus = "Let's dance!";
let repeat = 0;

while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}

console.log("Until the sun comes up!");

//when repeat reaches 5, will log "*change key*"