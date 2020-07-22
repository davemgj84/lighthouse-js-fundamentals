// Area Calculator Assignment:

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  }
}
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
}
function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * (radius * radius);
  }
}

// Realized I didn't have to declare variables within each function
// and could easily just make if statements to avoid negative numbers. 
// Had to look up how to find Pi in js, on the JavaScript MDN. 

//Also found this as another option for the same results: Might be more efficient actually..

/*

function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {
    return length * width;
  }
}

*/