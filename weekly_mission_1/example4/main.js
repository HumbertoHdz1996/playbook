const Logger = require ('./logger')     // Invoco al modulo(Logger) que contiene la clase (logger.js)

// Creación de un objeto
const dbLogger = new Logger('DB')   // Al crear un objeto nuevo, se llama por default el constructor de la clase
// Invoco al metodo
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger ('ACCESS')
accessLogger.verbose('This is a verbose message')