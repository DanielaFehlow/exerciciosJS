let grades = [9, 8, 7];
let sum = 0;

function mean() {
  for (i = 0; i < grades.length; i++) sum += grades[i];
  return (sum / grades.length).toFixed(2);
}
console.log(`A média do aluno é ${mean(sum)}`);

// nao ta somando quando coloca outros valores
