
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
     console.log(response.json());
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });