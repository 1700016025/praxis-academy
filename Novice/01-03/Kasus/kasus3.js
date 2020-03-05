function calculateSupply(age, numPerDay) {
  var maxAge = 80;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'anda membutuhkan ' + totalNeeded + ' cangkir teh untuk bertahan hingga usia ' + maxAge;
  console.log(message);
}

calculateSupply(28, 21);
calculateSupply(28, 2.5);
calculateSupply(28, 56);