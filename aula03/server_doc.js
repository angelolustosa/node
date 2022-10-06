const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('Ângelo')
}).listen(port, hostname, ()=> {
    console.log(`Servido rodando: http://${hostname}:${port}`)
})

