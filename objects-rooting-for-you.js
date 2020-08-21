//Code Evaluation - Objects - We're Rooting For You! :

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

judgeVegetable(vegetables, metric);


// My code below:

const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter
}


// Honestly this one completely confused me and I am not sure if I really understand it still
// even though I have solved it. I used some forums, and other resources to arrive at my answer. 


/* Code from a fellow student, with a different approach using the Math.max() method. 

const judgeVegetable = (vegetable, metrics) => {
  let metricResult = [];
  for (let i = 0; i < vegetable.length; i++) {
    metricResult.push(vegetable[i][metrics]);
  }
  let highestscore = Math.max(…metricResult);
  for (let i = 0; i < vegetable.length; i++) {
    if (vegetable[i][metrics] === highestscore) {
      return vegetable[i].submitter;
    }
  }
}

*/