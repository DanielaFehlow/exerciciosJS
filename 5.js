let degreeFahrenheit = 100;

function converter() {
  const treatedTemperature = (degreeFahrenheit - 20) / 1.8;
  return treatedTemperature.toFixed(2);
}

console.log(converter(degreeFahrenheit));
