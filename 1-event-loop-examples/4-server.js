const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request');
    res.end('hello');
})

server.listen(5000, () => {
    console.log('server is running on port 5000');
})