let num = [1, 2, 3, 4, 5];

function verifyBigger() {
  let numBigger = 0;
  for (i = 0; i < num.length; i++) if (num[i] > numBigger) numBigger = num[i];
  return numBigger;
}

console.log(verifyBigger(num));
