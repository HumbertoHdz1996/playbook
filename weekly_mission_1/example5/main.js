const logger = require('./logger')

// Ya se puede usar directamente el objetpo instanciado en móudulo logger
logger.log('This is an informational message')

/*
Tambien se puede instanciar uno nuevo de esta manera:
    const customLogger = new logger.constructor('CUSTOM')
    customLogger.log('This is an informational message')
*/
// Es decir, en este tipo "jala" toda la información desde logger y aqui le coloca el 'message'
