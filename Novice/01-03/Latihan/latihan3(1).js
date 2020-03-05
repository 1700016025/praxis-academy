/**
 * Contoh 1
 */
var x;
console.log(x === undefined); // true
x = 3;
 
/**
 * Example 2
 */
var myvar = 'my value';
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'nilai lokal';
})();