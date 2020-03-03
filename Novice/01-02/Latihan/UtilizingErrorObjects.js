function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // NOW, we actually use `console.error()`
  console.error(e.name);    // logs 'Error'
  console.error(e.message); // logs 'The message', or a JavaScript error message
}