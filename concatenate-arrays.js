// Concatenate Arrays Assignment - Code Evaluation:

function concat(array1, array2) {
  return [].concat(array1, array2);
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

// Was on the JavaScript MDN and found the concat() method. Not sure if this was a cheat, but it felt like one. 
// I couldn't get it to work at first, but found that just inserting this method within the function solved the problem. 