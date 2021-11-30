const fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var array = file.toString().split('\n');
console.log(array.length-1);
