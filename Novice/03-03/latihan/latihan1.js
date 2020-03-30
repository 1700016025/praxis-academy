fetch('https://randomuser.me/api/?results=10') // Call the fetch function passing the url of the API as a parameter
.then((respon) => {
    console.log(respon.json());
    // Your code for handling the data you get from the API
})
.catch((err) => {
    console.log(err);
    
    // This is where you run code if the server returns any errors
});