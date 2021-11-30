const fs = require("fs");
fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  var array = data.toString().split("\n").length - 1;
  console.log(array);
});
