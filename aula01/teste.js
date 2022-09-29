// CommonJS -> responsável por importar ou exportar os módulos
// Importando o módulo os do node e colocando em uma variável
const os = require('os')

setInterval(() => {
    const totalMem = parseInt(os.totalmem() / 1024 / 1024)
    const freeMem = parseInt(os.freemem() / 1024 / 1024)
    const percent = parseInt((freeMem / totalMem) * 100)

    const memoria = {
        total: `${totalMem} MB`,
        free: `${freeMem} MB`,
        percent: `${percent} %`
    }

    console.clear()
    console.table(memoria)
}, 1000)



/*
o módulo os está dentro da variável os, desta forma conseguimos
acessar as propriedades e métodos deste módulo/objeto.
*/


//console.log(`Memória Livre: ${freeMem}`, `Total de Mémoria: ${totalMem}`)