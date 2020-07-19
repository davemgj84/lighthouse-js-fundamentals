const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

/*  Prints: "Short sleeves are fine."
            "Now you're ready to go outside!"
*/

/*  temperature has to be less than 0 (< 0 ) for the console to print the first condition "Make sure you pick out a scarf!".
    temperature has to be less than 15 (< 15) for the console to print the second condition "Short sleeves won't cut it!". 
    temperature has to be equal to or greater than 15 (>= 15) for the console to print the third condition "Short sleeves are fine.". 
*/