let numbers = [8, 13, 27, 33, 40, 43, 45, 48];
let = sum = 0;

for (i = 0; i < numbers.length; i++)
  if (numbers[i] < 40) {
    sum += numbers[i];
  }

console.log(`The sum of numbers less than 40 is ${sum}`);
