const _ = require(underscore)
var number = [2, 4, 6, 2, 9],
    output
output = _.find(number, function(val) {
    if (val % 3 === 0) {
        return val
    }
})
console.log(output)