// // Contoh shows alert (1) and (2)--> Tidak terdapat error

// try {

//   alert('Start of try runs');  // (1) <--

//   // ...no errors here

//   alert('End of try runs');   // (2) <--

// } catch(err) {

//   alert('Catch is ignored, because there are no errors'); // (3)

// }

// // Contoh shows (1) and (3)--> Terdapat error 

// try {

//     alert('Start of try runs');  // (1) <--
  
//     lalala; // error, variable is not defined!
  
//     alert('End of try (never reached)');  // (2)
  
//   } catch(err) {
  
//     alert(`Error has occurred!`); // (3) <--
  
//   }

// // Contoh try..catch only works for runtime errors -->Terjadi error karena try nya tidak terbaca

// try {
//     {{{{{{{{{{{{
//   } catch(e) {
//     alert("The engine can't understand this code, it's invalid");
//   }

// // Contoh try..catch works synchronously

// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 1000);
//   } catch (e) {
//     alert( "won't work" );
//   }

// setTimeout(function() {
//     try {
//       noSuchVariable; // try..catch handles the error!
//     } catch {
//       alert( "error is caught here!" );
//     }
//   }, 1000);

// // Contoh Error object

// try {
//     lalala; // error, variable is not defined!
//   } catch(err) {
//     alert(err.name); // ReferenceError
//     alert(err.message); // lalala is not defined
//     alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
//     // Can also show an error as a whole
//     // The error is converted to string as "name: message"
//     alert(err); // ReferenceError: lalala is not defined
//   }

// // Contoh Using “try…catch”

// let json = '{"name":"Cintia Kus Herawati ", "age": 20}'; // data from the server

// let user = JSON.parse(json); // convert the text representation to JS object

// // now user is an object with properties from the string
// alert( user.name ); // Cintia Kus Herawati
// alert( user.age );  // 20

// let json = "{ bad json }";

// try {

//   let user = JSON.parse(json); // <-- when an error occurs...
//   alert( user.name ); // doesn't work

// } catch (e) {
//   // ...the execution jumps here
//   alert( "Our apologies, the data has errors, we'll try to request it one more time." );
//   alert( e.name );
//   alert( e.message );
// }

// // Contoh Throwing our own errors

// let json = '{ "age": 30 }'; // incomplete data

// try {

//   let user = JSON.parse(json); // <-- no errors
//   alert( user.name ); // no name!

// } catch (e) {
//   alert( "doesn't execute" );
// }

// // Contoh “Throw” operator

// let error = new Error("Things happen o_O");

// alert(error.name); // Error
// alert(error.message); // Things happen o_O

//
// try {
//     JSON.parse("{ bad json o_O }");
//   } catch(e) {
//     alert(e.name); // SyntaxError
//     alert(e.message); // Unexpected token b in JSON at position 2
//   }

// 
// let json = '{ "age": 30 }'; // incomplete data

// try {

//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   alert( user.name );

// } catch(e) {
//   alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
// }

// // Contoh Rethrowing
// let json = '{ "age": 30 }'; // incomplete data
// try {

//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   blabla(); // unexpected error

//   alert( user.name );

// } catch(e) {

//   if (e.name == "SyntaxError") {
//     alert( "JSON Error: " + e.message );
//   } else {
//     throw e; // rethrow (*)
//   }

// }

// // Contoh try…catch…finally
// let num = +prompt("Enter a positive integer number?", 35)

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must not be negative, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (e) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// alert(result || "error occurred");

// alert( `execution took ${diff}ms` );

// // Task

function f() {
    try {
      alert('start');
      return "result";
    } catch (e) {
      /// ...
    } finally {
      alert('cleanup!');
    }
  }
  
  f(); // cleanup!
