/*
Usando CommonJS
    - Crear la clase
    - Crear el constructor que recibira el nombre
    - Crear la función .sayHello()
    - Crear la función .sayMessage()
    - Exportar la clase para que pueda ser importada en el archivo
*/

class Pokemon {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`);
    }
    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice ${message}`);
    }
}

module.exports = Pokemon    // Exporto la CLASE de Pokemon
