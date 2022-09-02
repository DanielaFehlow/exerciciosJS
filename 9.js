let num = [13, 27, 33];

function verifyBigger() {
  let numBigger = 0;
  for (i = 0; i < num.length; i++) if (num[i] > numBigger) numBigger = num[i];
  return numBigger;
}

console.log(`O maior número é ${verifyBigger(num)}`);
