let example = [2, 4, 1, 0, 2, -1]; // [-1, 4]
let example2 = [20, 50, 12, 6, 14, 8]; // [6, 50]
let example3 = [100, -100]; // [-100, 100]

function maxMin(input) {
  let result = [input[0], input[0]];

  // Highest
  for (let i = 0; i < input.length; i++) {
    if (result[1] < input[i]) {
      result[1] = input[i];
    }
  }

  // Lowest
  input.forEach((e) => {
    if (result[0] > e) {
      result[0] = e;
    }
  });

  console.log(result);
}

// Run
maxMin(example3);
