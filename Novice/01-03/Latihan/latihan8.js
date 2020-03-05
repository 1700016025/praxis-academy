function exampleScope() {
    console.log(foo); // => undefined
    
    foo(); // => TypeError: foo is not a function [Stop script execution]
  
    var foo = function() {
      console.log(“Hello, world!”)
    }
  }