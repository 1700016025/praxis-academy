var re = /([A-Z0-9])([-\/\.])/;
function testInfo(plateInput) {
  var OK = re.exec(plateInput.value);
  if (!OK) {
    alert(plateInput.value + ' isn\'t vehicle plate number with area code!'); 
  } else {
    alert('Thanks, your vehicle plate number is ' + plateInput.value);}
} 