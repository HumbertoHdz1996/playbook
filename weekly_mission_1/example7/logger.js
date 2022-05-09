/*
Este modulo se comporta como si fuera un objeto que contiene todo lo definido
    [Module: null prototype] {
        DEFAULT_LEVEL: 'info',
        LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
        Logger: [class Logger],
        log: [Function Log]
    }
*/

// Exports a function
export function log (message) {
    console.log(message);
}

//exporta a constant
export const DEFAULT_LEVEL = 'info'

//exports an object
export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
}

//exporta a class
export class Logger {
    constructor (name) {
        this.name = name
    }
    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}
