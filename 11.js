let base = 6;
let height = 8;
const resultPerimeter = 2 * (base + height);
const resultArea = base * height;

function perimeter() {
  return resultPerimeter;
}

function area() {
  return resultArea;
}

console.log(
  `A área do retangulo é ${area(resultArea)}cm e o perimetro é ${perimeter(
    resultPerimeter
  )}cm.`
);
