class Logger {
    constructor(name) {
        // this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name    //A estas variables se les conocen como atributos
    }

    // Metodos
    // this.name es la variiable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este metodo
    info (message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    // Metodo
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// Esta clase se exporta en este modulo
module.exports = Logger