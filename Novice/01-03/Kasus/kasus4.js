function calcCircumference(radius) {
    const twopi = (2 * 3.14);
    return("The circumference is " + radius * twopi );
}

console.log(calcCircumference("5"))

function calcArea(radius) {
    const pi = 3.14;
    const a = Math.pow(radius, 2);
    return("The Area is " + a * pi);
}

console.log(calcArea("5"))

console.log(" ")