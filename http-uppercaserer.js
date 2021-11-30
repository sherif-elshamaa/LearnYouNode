var port = Number(process.argv[2]);
const map = require('through2-map');
http = require('http');

http.createServer((req, res) => {
    if(req.method === 'POST'){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        req.pipe(map((chunk) =>{
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {res.writeHead(405)}
}).listen(port);


// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))