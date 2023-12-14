const circleRadius = parseInt(prompt('Please enter the radius of circle'));

function getRadiusOfCircle(radius) {
  return Math.PI * Math.pow(circleRadius, 2);
}

console.log(`The area of circle with radius ${circleRadius} is ${getRadiusOfCircle(circleRadius)}`);