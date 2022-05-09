require('./patcher')    // Llamo al módulo que modifica el objeto instanciado
const logger = require('./logger')      // Al llamar al módulo en .logger.js me dara el objeto modificado, por lo que no aparece el '[DEFAULT] + '

logger.customMessage()