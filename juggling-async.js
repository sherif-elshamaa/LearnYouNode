http = require('http');
var bl = require('bl');
var urlList = [process.argv[2], process.argv[3], process.argv[4]]
count = urlList.length;


var results = [];
urlList.forEach((url, i) => {

    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if (err) throw err;
            results[i] = data.toString();
            count--;
            if (count === 0) {
                results.forEach((line) => {
                    console.log(line);
                });
            }
        }))
    })
})

