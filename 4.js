let ages = [6, 22, 19, 15, 33];
let bigger = 0;
let smaller = 0;

for (i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    bigger++;
  } else smaller++;
}

console.log(bigger);
console.log(smaller);
