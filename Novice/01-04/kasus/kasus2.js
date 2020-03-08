var re =/[\w-]+@([\w-]+\.)+[\w-]+$/i;
var rgname = /([^@]*)/;
var rgtld = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;

function testInfo(answer){
  var OK = re.exec(answer.value);
  var uname = rgname.exec(answer.value);
  var nametld = rgtld.exec(answer.value);
  if(!OK)
    alert(answer.value+ ' Format Email Salah!');
    else {
      alert(' Halo, Username anda ' + uname[0] + ' adalah domain anda adalah ' + nametld[0]);
    }
}