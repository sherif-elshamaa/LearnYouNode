const net = require('net');
var port = Number(process.argv[2]);

let date = new Date();
let month = zeroCheck(date.getUTCMonth() + 1);
let monthDate = zeroCheck(date.getDate());
let hours = zeroCheck(date.getHours());
let minutes = zeroCheck(date.getMinutes());

function zeroCheck(moment) {
    return moment < 10 ? "0" + moment : moment;
}

let formattedDate = date.getFullYear() + "-" + month + "-" + monthDate + " " + hours + ":" + minutes;

const server = net.createServer((socket) => {
    socket.write(formattedDate);
    socket.end("\n");
}).on('error', (err) => { 
    throw err; 
});

server.listen(port);