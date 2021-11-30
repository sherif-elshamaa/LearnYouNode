const mymod = require('./mymodule');

mymod(process.argv[2], process.argv[3], function (err, newlist) {
    if (err) throw err;
    newlist.map(file => console.log(file));
})