var firstNote = 8;
var secondNote = 7.5;
const resultado = (firstNote + secondNote).toFixed(2);

function verifyNote() {
  if (resultado / 2 >= 7 && resultado / 2 <= 10) {
    return "Aprovado";
  }
  if (resultado / 2 < 7) {
    return "Reprovado";
  }
  if (resultado / 2 == 10) {
    return "Aprovado com distinção";
  }
}

console.log(verifyNote(resultado));
