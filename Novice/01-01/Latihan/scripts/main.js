

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox.png') {
      myImage.setAttribute ('src','firefox3.jpg');
    } else {
      myImage.setAttribute ('src','firefox.png');
    }

}
 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }*/

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozila is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }