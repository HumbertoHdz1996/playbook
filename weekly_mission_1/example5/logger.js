class Logger {
    constructor(name){
        // Al crear este objeto se guardaran estos valores
        this.count = 0
        this.name = name
    }
    
    log(message) {
        this.count++    // Se aumenta al contador interno al llamar este metodo
        console.log('[' + this.name + '] ' + message)
    }
}

module.exports = new Logger('DEFAULT')  // Instanciación del objeto y se exporta, lo que permitira que lo vea la el main.js
