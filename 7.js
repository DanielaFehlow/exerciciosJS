let typedLetter = "e";
const vowels = ["a", "e", "i", "o", "u"];

function verifyLetter() {
  if (vowels.indexOf(typedLetter.toLocaleLowerCase()) !== -1) {
    return "Vogal";
  } else {
    return "Consoante";
  }
}

verifyLetter();
console.log(verifyLetter(typedLetter));
