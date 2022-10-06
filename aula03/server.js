const http = require('http')

http.createServer((req, res) => {
    console.log(res)
}).listen(5000, () => console.log('Servidor funcionando...'))