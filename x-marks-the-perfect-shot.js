//Working out X marks the perfect shot - Quiz:

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let position = [0, 0];
  for (let direction of moves) {
    switch (direction) {
      case 'north':
        position[1] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
      case 'west':
        position[0] -= 1;
        break;
      case 'east':
        position[0] += 1;
        break;
    }
  }
  return position;
}

finalPosition(moves);

//logged to console to check if it provide proper coordinates. [-1,4] Awesome!

console.log(finalPosition(moves));
// for some reason it wasn't evaluating correct. After looking at the forum I found I had to change some of the indentation
// as the code evaluator wasn't passing it. Worked fine changing bringing the case indentations back to the same spacing as switch..