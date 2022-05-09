/*
Usando ESM
    - Crear clase para correr en main.js
    - Usar export default
    - Crear el constructor que recibira el nombre
    - Crear la función .sayHello()
    - Crear la función .sayMessage()
*/

export default class Pokemon {
    constructor(name) {
        this.name = name
    }

    sayHello(message){
        console.log(`Hola, soy ${this.name} y digo ${message}`);
    }
}