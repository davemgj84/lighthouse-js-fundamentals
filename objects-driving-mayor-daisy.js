// Code Evaluation - Driving Mayor Daisy:

const carPassing = function (cars, speed) {
  cars.push({ time: Date.now(), speed: speed });
  return cars;
}

// This one had me a bit stumped when reading the assignment, but actually
// turned out to be rather simple. I tried pushing a whole new object and it
// surprisingly worked. Way simpler than originally thought!