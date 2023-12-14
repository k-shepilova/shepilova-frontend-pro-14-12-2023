function getRadiusOfCircle() {
  const circleRadius = parseInt(prompt('Please enter the radius of circle'));
  const areaOfCircle = Math.PI * Math.pow(circleRadius, 2);
  console.log(`The area of circle is ${areaOfCircle}`);
}

getRadiusOfCircle();