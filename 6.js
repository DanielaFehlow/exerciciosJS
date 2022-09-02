let available = 80;

function calculateFunctioning() {
  const gasolineCalculation = available / 5;
  const calculationKM = gasolineCalculation;
  return `Você poderá abastecer ${gasolineCalculation}/litros e o carro andará ${calculationKM}/Km.`;
}

console.log(calculateFunctioning(available));
