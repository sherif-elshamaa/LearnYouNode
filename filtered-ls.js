const fs = require('fs');

var array = process.argv[2];
var fileType = "."+process.argv[3];

fs.readdir(array, function (err, list){
    if (err) throw err;
    var newList = list.filter((file) => file.includes(fileType));
    newList.map(file => console.log(file));
})