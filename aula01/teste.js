// CommonJS -> responsável por importar ou exportar os módulos
// Importando o módulo os do node e colocando em uma variável
const os = require('os')
const { byteToGB } = require('../aula02/convertUnitStorage')
const fs = require('fs')

setInterval(() => {
    const totalMem = parseFloat(byteToGB(os.totalmem())).toFixed(2)
    const freeMem = parseFloat(byteToGB(os.freemem())).toFixed(2)
    const percent = parseInt((freeMem / totalMem) * 100)
    
    const memoria = {
        total: `${totalMem} GB`,
        free: `${freeMem} GB`,
        percent: `${percent} %`
    }

    let dateTime = new Date().toLocaleString()
    let print = `${dateTime} ${JSON.stringify(memoria)}\n`

    console.clear()
    console.table(memoria)
    fs.appendFile(
        './aula02/log.txt',
        print,
        'utf-8',
        () => console.log('Log inserido')
    )
}, 1000)



/*
o módulo os está dentro da variável os, desta forma conseguimos
acessar as propriedades e métodos deste módulo/objeto.
*/


//console.log(`Memória Livre: ${freeMem}`, `Total de Mémoria: ${totalMem}`)