var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);