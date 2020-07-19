/* NOTE:  I have commented out this code as I worked through each problem in this chapter.
          When running individual code tests, I simply remove the comment notations for each section to keep things clear in NODE.
*/

/* First section***

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/

/* Second section***

const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
*/

/* Third Section*** 

const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

/*  Prints: "Short sleeves are fine."
            "Now you're ready to go outside!"
*/

/*  temperature has to be less than 0 (< 0 ) for the console to print the first condition "Make sure you pick out a scarf!".
    temperature has to be less than 15 (< 15) for the console to print the second condition "Short sleeves won't cut it!". 
    temperature has to be equal to or greater than 15 (>= 15) for the console to print the third condition "Short sleeves are fine.". 
*/

/* Example of '&&' Logical AND operator.***

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

*/

/* Example of '||' Logical OR operator.***

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

*/

/* Raining not defined here.Example of '!' Logical NOT operator.*** 

if (!raining) {
  console.log("Leave your umbrella at home!");
}

*/