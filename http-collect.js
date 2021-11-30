http = require('http');
var url = process.argv[2]
http.get(url, function (res) {
    let body = "";
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log(body.length);
        console.log(body);
    })
})