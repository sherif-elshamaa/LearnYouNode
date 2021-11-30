var port = Number(process.argv[2]);
var location = process.argv[3];
fs = require('fs');
http = require('http');

const server = http.createServer((req, res) => {
    fs.createReadStream(location).pipe(res);
})

server.listen(port)


// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))