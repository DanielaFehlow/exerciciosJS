let numbers = [-3, -2, -1, 0, 1, 2, 3];
let positives = 0;
let negatives = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negatives++;
  } else positives++;
}

console.log(positives);
console.log(negatives);
