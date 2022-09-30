const byteToMB = bytes => bytes / 1024 / 1024

const byteToGB = bytes => bytes / 1024 / 1024 / 1024 

/* 
    O module.exports permite exportar as funções para que sejam
    visíveis em outro arquivo, permitindo a reutilização e evitando
    repetição de código.
*/
module.exports = { byteToGB, byteToMB }