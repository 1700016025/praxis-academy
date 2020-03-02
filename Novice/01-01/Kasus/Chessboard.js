<html>
    <head>

    </head>
    <script> 
    var size = 8;
var block = '#';
var space = ' ';

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var y = 1; y <= size; y++){
    if (i%2) {
        if (y%2) {
            line = line + space;
        } else {
            line = line + block;
        }
    } else {
        if (y%2) {
            line = line + block;
        } else {
            line = line + space;
        }
    }
  }

  console.log(line);
}
    </script>

</html>