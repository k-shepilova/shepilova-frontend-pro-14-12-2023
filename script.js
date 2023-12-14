function geRadiusOfCircle(promptText) {
  return parseInt(prompt(promptText));
}

const circleRadius = geRadiusOfCircle('Please enter the radius of circle');
const areaOfCircle = Math.PI * Math.pow(circleRadius, 2);

console.log(`The area of circle is ${areaOfCircle}`);

