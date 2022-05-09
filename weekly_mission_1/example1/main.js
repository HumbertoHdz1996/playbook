console.log("Que onda Explorers!");

let myCar = new Object();
myCar.model = "Audi";
//Ejemplo de función:           let nombre_Funcion = ((argumentos) => {acciones a realizar})
//Tambien puede ser const       const nombre_Funcion = ((argumentos) => {acciones a realizar})

const myModule = (() => {
    const privateFoo = "No quiero que vean esto!"

    const exported = {
        publicFoo: "Quiero que vean esto!"
    }

    return exported;
})
//console.log(myModule.privateFoo)
console.log(myModule.exported)